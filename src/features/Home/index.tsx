import React, { useEffect, useState } from "react";
import { Container } from "./assets/styles";
import { productListDetails } from "./constants";
import ProductDetails from "./components/ProductDetails";
import Categories from "./components/Categories";
import Cart from "./components/cart";
import { productDetails, cartProduct } from "./typesList";
import Header from "../../features/Header";
import { Homediv } from "./assets/styles";

const Home = () => {
  const [productList, setProductList] =
    useState<Array<productDetails>>(productListDetails);
  const [productSortedList, setProductSortedList] =
    useState<Array<productDetails>>(productListDetails);
  const [selectedProductList, setSelectedProductList] = useState<
    Array<cartProduct>
  >([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const [categoriesList, setCategoriesList] = useState<Array<string>>([]);

  useEffect(() => {
    const categoryTypeList: Array<string> = [];
    productList.forEach((item) => {
      if (item.category && !categoryTypeList.includes(item.category)) {
        categoryTypeList.push(item.category);
      }
    });
    setCategoriesList(categoryTypeList);
  }, []);

  const handlerCategory = (category: string) => {
    if (category && category !== selectedCategory) {
      setProductSortedList(
        productList.filter((item) => item.category === category)
      );
      setSelectedCategory(category)
    } else {
      setSelectedCategory('')
      setProductSortedList(productList);
    }
  };

  const handleAddProduct = (product: productDetails) => {
    const isPoductExist = selectedProductList.find(
      (item: productDetails) => item.productId.value === product.productId.value
    );
    if (!isPoductExist) {
      const data = [...selectedProductList];
      data.push({ ...product, qnt: 1 });
      setSelectedProductList(data);
    }
  };

  const handleRemoveProduct = (product: cartProduct) => {
    const isPoductExist = selectedProductList.filter(
      (item: cartProduct) => item.productId.value !== product.productId.value
    );
    setSelectedProductList(isPoductExist);
  };

  const handleIncreseProduct = (product: cartProduct) => {
    const isPoductExist = selectedProductList.map((item: cartProduct) => {
      if (item.productId.value === product.productId.value) {
        return { ...item, qnt: item.qnt + 1 };
      } else return item;
    });
    setSelectedProductList(isPoductExist);
  };

  const handleDecreseProduct = (product: cartProduct) => {
    const isPoductExist = selectedProductList.map((item: cartProduct) => {
      if (item.productId.value === product.productId.value) {
        if (item.qnt > 1) {
          return { ...item, qnt: item.qnt - 1 };
        }
        handleRemoveProduct(product)
        return item;
      } else return item;
    });
    setSelectedProductList(isPoductExist);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.value) {
      const name = e.target.value.toLowerCase();
      setProductSortedList(
        productList.filter(
          (item) =>
            item?.name?.toLowerCase().includes(name) ||
            item?.category?.toLowerCase().includes(name)
        )
      );
    } else {
      setProductSortedList(productList);
    }
  };

  return (
    <div>
      <Homediv>
        <div>
          <Header handleSearch={handleSearch} />
          <Categories
            categoriesList={categoriesList}
            handlerCategory={handlerCategory}
            selectedCategory={selectedCategory}
          />
          <Container>
            <div className="fx-2">
              <ProductDetails
                productList={productSortedList}
                handleAddProduct={handleAddProduct}
              />
            </div>
          </Container>
        </div>
        <Cart
          cartItems={selectedProductList}
          handleRemoveProduct={handleRemoveProduct}
          handleIncreseProduct={handleIncreseProduct}
          handleDecreseProduct={handleDecreseProduct}
        />
      </Homediv>
    </div>
  );
};

export default Home;

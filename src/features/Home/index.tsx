import React, { useEffect, useState } from "react";
import {
  Container
} from './assets/styles';
import { productListDetails } from './constants'
import ProductDetails from "./components/ProductDetails";
import Categories from "./components/Categories";
import { productDetails } from './typesList'
import Header from '../../features/Header'

const Home = () => {
  const [productList, setProductList] = useState<Array<productDetails>>(productListDetails)
  const [productSortedList, setProductSortedList] = useState<Array<productDetails>>(productListDetails)

  const [categoriesList, setCategoriesList] = useState<Array<string>>([])

  useEffect(() => {
    const categoryTypeList: Array<string> = []
    productList.map(item => {
      if (item.category && !categoryTypeList.includes(item.category)) {
        categoryTypeList.push(item.category)
      }
    })
    setCategoriesList(categoryTypeList)
  }, [])

  const handlerCategory = (category: string) => {
    if (category) {
      setProductSortedList(productList.filter(item => item.category === category))
    } else {
      setProductSortedList(productList)
    }
  }

  return (
    <div>
      <Header />
      <Categories categoriesList={categoriesList} handlerCategory={handlerCategory} />
      <Container>
        <div className="row">
          <ProductDetails productList={productSortedList} handleAddProduct={(data) => console.log(data)} />
        </div>
      </Container>
    </div>
  );
};

export default Home;
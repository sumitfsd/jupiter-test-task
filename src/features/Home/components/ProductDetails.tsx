import { IoIosAddCircleOutline } from "react-icons/io";
import {
  ProductBox,
  ProductImage,
  ProductButton,
  ContentSmall,
  ProductName,
  ProductImageWrapper,
  ProductPrice,
} from "../assets/styles";
import { productDetails } from "../typesList";

interface PropsList {
  productList: Array<productDetails>;
  handleAddProduct: (item: any) => void;
}

const ProductDetails = (props: PropsList) => {
  const { productList, handleAddProduct } = props;

  return (
    <>
      {productList.map((item: productDetails) => {
        return (
          <>
            <ProductBox>
              <ProductImageWrapper>
                <ProductImage
                  src={item.imageUrl}
                  alt="product"
                  className="productImageClass"
                />
              </ProductImageWrapper>
              <div className="productBoxContent">
                <ContentSmall>{item.category}</ContentSmall>
                <ProductName>{item.name}</ProductName>
                <ProductPrice>{`$${item.price}/${item.unitType}`}</ProductPrice>
              </div>
              <div>
                <ProductButton
                  className="productButton"
                  onClick={() => handleAddProduct(item)}
                >
                  <IoIosAddCircleOutline /> add to cart
                </ProductButton>
              </div>
            </ProductBox>
          </>
        );
      })}
    </>
  );
};

export default ProductDetails;

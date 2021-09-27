import { cartProduct } from "../typesList";
import {
  Qntdiv,
  ProductBox,
  ProductImage,
  Btn,
  ProductButton,
  ContentSmall,
  ProductName,
  ProductImageWrapper,
} from "../assets/styles";

interface PropsDetails {
  cartItems: cartProduct[];
  handleRemoveProduct: (item: any) => void;
  handleIncreseProduct: (item: any) => void;
  handleDecreseProduct: (item: any) => void;
}

export default function Cart(props: PropsDetails) {

  const { cartItems, handleRemoveProduct, handleIncreseProduct, handleDecreseProduct } = props
  return (
    <div>
      <h1>cart</h1>
      {cartItems.map((item: cartProduct) => {
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
                <h2>{`$${item.price}/${item.unitType}`}</h2>
              </div>
              <div>
                <Btn onClick={() => handleIncreseProduct(item)}>+</Btn>
                <Qntdiv>{item.qnt}</Qntdiv>
                <Btn
                  onClick={() => {
                    handleDecreseProduct(item);
                    if (item.qnt === 0) handleRemoveProduct(item);
                  }}
                >
                  -
                </Btn>
                <ProductButton
                  className="productButton"
                  onClick={() => handleRemoveProduct(item)}
                >
                  remove from cart
                </ProductButton>
              </div>
            </ProductBox>
          </>
        );
      })}
    </div>
  );
}

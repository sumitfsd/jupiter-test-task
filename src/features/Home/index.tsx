import React, { useEffect, useState } from "react";
import {
  Container
} from './assets/styles';
import { productListDetails } from './constants'
import ProductDetails from "./components/ProductDetails";
import { IoMdHand } from "react-icons/io";
import { productDetails } from './typesList'
import Header from '../../features/Header'

const Home = () => {
  const [productList, setProductList] = useState<Array<productDetails>>(productListDetails)

  return (
    <div>
      <Header />
      <Container>
        <div className="row">
          <ProductDetails productList={productList} handleAddProduct={(data) => console.log(data)} />
        </div>
      </Container>
    </div>
  );
};

export default Home;

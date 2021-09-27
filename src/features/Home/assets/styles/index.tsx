import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
`;

export const ProductBox = styled.div`
  text-align: center;
`;

export const ProductImageWrapper = styled.div`
  border: 1px solid red;
  text-align: center;`
  ;

export const ProductButton = styled.button`
  width: 100%;
  padding: 1rem 0;
  text-transform: capitalize;
  border: 1px solid #d7d7d7;
  background-color: transparent;
  color: #38c2de;
  font-weight: 600;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;


export const ContentSmall = styled.small`
  font-weight: 600;
  margin-top: 1rem;
  display: block;
  `;

export const ProductName = styled.h3`
    padding: 1rem 0;
  `;

export const ProductImage = styled.img`
  width: 20rem;
  height: 15.4rem;
`;

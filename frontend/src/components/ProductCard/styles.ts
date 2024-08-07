import styled from "styled-components";

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  /* offset-x | offset-y | blur-radius | color */
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.08);
  padding: 10px;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  border-radius: 15px;
  background-color: #fff;
  overflow: hidden;
  width: 100%;

  img {
    width: 100%;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ProductTitle = styled.p`
  font-size: 0.828rem;
  color: #2b2b2b;
`;

export const ProductPrice = styled.p`
  font-weight: 700;
  font-size: 0.828rem;

  &::before {
    content: "R$";
  }
`;

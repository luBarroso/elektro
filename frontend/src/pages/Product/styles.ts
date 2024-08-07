import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 50%;
  gap: 20px;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #2b2b2b;
  border-radius: 0 0 16px 16px;
  padding: 30px 10px 20px 10px;
  width: 100vw;
  gap: 40px;

  color: #f5f5f5;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 90%;
  margin-left: 60px;
  svg {
    width: 30px;
  }
`;

export const ProductImage = styled.img`
  width: 60%;
  max-width: 300px;
  border-radius: 16px;
`;

export const ProfilePic = styled.img`
  border-radius: 50%;
`;

export const TitlePriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;

  h3,
  p {
    font-weight: 400;
    font-size: 1.5rem;
  }

  p {
    &::before {
      content: "R$ ";
    }
  }
`;

export const ProductStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 0 20px 0 20px;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  font-size: 0.875rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  gap: 10px;

  h4 {
    font-weight: 500;
    font-size: 1.5rem;
  }

  p {
    font-weight: 400;
    font-size: 0.875rem;
  }
`;

export const BuyButton = styled.button`
  border: 0;
  outline: none;
  padding: 10px;
  background: #2b2b2b;
  color: #f5f5f5;
  border-radius: 16px;
  width: 50%;
  min-width: 200px;
  max-width: 300px;
  margin-bottom: 10%;

  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
`;

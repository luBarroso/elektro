import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5vw;
  gap: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PageTitle = styled.h2`
  color: #ff8f0e;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;

export const ContentTitle = styled.h3`
  font-weight: 500;
  align-self: flex-start;
  font-size: 1rem;
`;

export const Divider = styled.hr`
  width: 100%;
  height: 0;
  border: 0.1px solid #b9b9b9;
  border-radius: 1.5px;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 20px;
`;

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  p {
    font-size: 0.875rem;
  }
`;

export const CategoryImage = styled.img`
  border-radius: 50%;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: 100%;
  gap: 20px;
  justify-content: center;
  align-items: center;
  max-width: 500px;
`;

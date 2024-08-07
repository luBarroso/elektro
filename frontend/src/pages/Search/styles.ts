import styled from "styled-components";

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding: 20px;
  gap: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  background: #2b2b2b;
  border-radius: 16px;
  padding: 5px 10px 5px 10px;
  gap: 5px;
  flex: 1;

  input {
    background: transparent;
    border: 0;
    outline: none;
    font-family: "Montserrat", sans-serif;
    color: #f5f5f5;
    font-weight: 400;
    font-size: 1rem;
    border-bottom: 1px solid #fff;
    flex: 1;

    &::placeholder {
      font-family: "Montserrat", sans-serif;
      color: #b9b9b9;
      font-weight: 400;
      font-size: 1rem;
    }
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SearchText = styled.p`
  padding: 0 20px 0 20px;
`;

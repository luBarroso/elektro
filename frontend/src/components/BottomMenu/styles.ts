import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  background-color: #2b2b2b;
`;

export const MenuButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ButtonText = styled.p`
  color: #dedede;
  font-weight: 400;
`;

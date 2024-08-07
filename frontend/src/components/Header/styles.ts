import styled from "styled-components";
import { Divider } from "../../pages/Home/styles";

export const Container = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #2b2b2b;
  border-radius: 0 0 16px 16px;
`;

export const SearchContainer = styled.div`
  background-color: #f5f5f5;
  width: 60%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 5px 10px 5px 10px;
  gap: 5px;
`;

export const SeachInput = styled.input`
  border: 0;
  outline: none;
  height: 100%;
  background-color: transparent;

  &::placeholder {
    font-family: "Montserrat", sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    color: #2b2b2b;
  }
`;

interface ContainerProps {
  active: boolean;
}

export const MenuBurguer = styled.div<ContainerProps>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 50;
  display: ${(ContainerProps) => (ContainerProps.active ? "flex" : "none")};
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.3);
  border: 0;
`;

export const ViewConatiner = styled.div`
  position: fixed;
  width: 50%;
  max-width: 300px;
  z-index: 100;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HiddenContainer = styled.div`
  position: relative;
  background: transparent;
  flex: 1;
`;

export const UserContainer = styled.div`
  background: #2b2b2b;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 10%;
  color: #fff;
  padding: 30px;

  p {
    flex: 1;
    text-align: center;
    font-weight: 500px;
    font-size: 1.25rem;
  }
`;

export const MenuDivider = styled(Divider)``;

export const BurguerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  width: 100%;
`;

export const BurguerOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  gap: 20px;

  p {
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const LogoutOption = styled.p`
  padding: 20px;
  font-size: 1rem;
  font-weight: 500;
`;

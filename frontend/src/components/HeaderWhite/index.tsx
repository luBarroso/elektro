import MenuIcon from "../../assets/menu-icon2.svg";
import Profile from "../../assets/profile-icon2.svg";
import {
  BurguerContent,
  BurguerOptions,
  Container,
  HiddenContainer,
  LogoutOption,
  MenuBurguer,
  MenuDivider,
  UserContainer,
  ViewConatiner,
} from "./styles";
import UserIcon from "../../assets/user-icon.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface HeaderProp {
  title: string;
}

export const HeaderWhite = ({ title }: HeaderProp) => {
  const [active, setActive] = useState<boolean>(false);

  const navigate = useNavigate();

  return (
    <>
      <MenuBurguer active={active}>
        <ViewConatiner>
          <UserContainer onClick={() => navigate("/perfil")}>
            <UserIcon />
            <p>Usuário</p>
          </UserContainer>
          <BurguerContent>
            <BurguerOptions>
              <p>Editar dados</p>
              <MenuDivider />
              <p>Meus pedidos</p>
              <MenuDivider />
              <p>Meus produtos</p>
              <MenuDivider />
              <p>Meu carrinho</p>
            </BurguerOptions>
            <LogoutOption>Sair</LogoutOption>
          </BurguerContent>
        </ViewConatiner>
        <HiddenContainer
          onClick={() => {
            setActive(false);
          }}
        />
      </MenuBurguer>

      <Container>
        <div
          onClick={() => {
            setActive(true);
          }}
        >
          <MenuIcon />
        </div>
        <h2>{title}</h2>
        <Profile />
      </Container>
    </>
  );
};

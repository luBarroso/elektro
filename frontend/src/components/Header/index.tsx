import MenuIcon from "../../assets/menu-icon.svg";
import CartIcon from "../../assets/cart-icon.svg";
import SearchIcon from "../../assets/search-icon.svg";
import {
  BurguerContent,
  BurguerOptions,
  Container,
  HiddenContainer,
  LogoutOption,
  MenuBurguer,
  MenuDivider,
  SeachInput,
  SearchContainer,
  UserContainer,
  ViewConatiner,
} from "./styles";
import UserIcon from "../../assets/user-icon.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
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
        <SearchContainer>
          <SearchIcon />
          <SeachInput
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const target = e.target as HTMLInputElement;
                const formattedValue = target.value.replace(/\s+/g, "-");
                navigate(`pesquisa/${formattedValue}`);
              }
            }}
            placeholder="Encontrar na Elektro"
          />
        </SearchContainer>
        <CartIcon></CartIcon>
      </Container>
    </>
  );
};

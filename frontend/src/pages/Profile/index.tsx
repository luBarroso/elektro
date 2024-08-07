import {
  Button,
  Container,
  LoginButton,
  LoginContainer,
  ProfileHeader,
  UserButtons,
} from "./styles";
import ProfPic from "../../assets/default-profile-picture.png";
import Logo from "../../assets/elektro-logo.svg";
import ConfigIcon from "../../assets/config-icon.svg";
import DataIcon from "../../assets/data-icon.svg";
import ProductIcon from "../../assets/product-icon.svg";
import FavIcon from "../../assets/heart-icon.svg";
import CartIcon from "../../assets/cart-icon2.svg";
import CuponIcon from "../../assets/cupon-icon.svg";
import ChatIcon from "../../assets/chat-icon2.svg";
import { BottomMenu } from "../../components/BottomMenu";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <ProfileHeader>
          <Logo />
          <ConfigIcon />
        </ProfileHeader>
        <img src={ProfPic} alt="" />
        <LoginContainer>
          <LoginButton onClick={() => navigate("/entar")}>Entrar</LoginButton>
          <LoginButton onClick={() => navigate("/cadastro")}>
            Cadastrar
          </LoginButton>
        </LoginContainer>
        <UserButtons>
          <Button>
            <DataIcon />
            Meus dados
          </Button>
          <Button>
            <ProductIcon />
            Meus produtos
          </Button>
          <Button>
            <FavIcon />
            Meus Favoritos
          </Button>
          <Button>
            <CartIcon />
            Meu carrinho
          </Button>
          <Button>
            <CuponIcon />
            Meus cupons
          </Button>
          <Button>
            <ChatIcon />
            Meus chats
          </Button>
        </UserButtons>
      </Container>
      <BottomMenu />
    </>
  );
};

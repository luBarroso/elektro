import HomeIcon from "../../assets/home-icon.svg";
import MessageIcon from "../../assets/chat-icon.svg";
import NotificationIcon from "../../assets/notification-icon.svg";
import ProfileIcon from "../../assets/profile-icon.svg";
import { ButtonText, Container, MenuButton } from "./styles";
import { useNavigate } from "react-router-dom";

export const BottomMenu = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <MenuButton onClick={() => navigate("/")}>
        <HomeIcon />
        <ButtonText>Home</ButtonText>
      </MenuButton>
      <MenuButton>
        <MessageIcon />
        <ButtonText>Chat</ButtonText>
      </MenuButton>
      <MenuButton>
        <NotificationIcon />
        <ButtonText>Avisos</ButtonText>
      </MenuButton>
      <MenuButton onClick={() => navigate("/perfil")}>
        <ProfileIcon />
        <ButtonText>Perfil</ButtonText>
      </MenuButton>
    </Container>
  );
};

import { Container, ContentContainer } from "./styles";
import CongIllust from "../../assets/congratulations-illustration.svg";
import NextIcon from "../../assets/next-icon.svg";
import { useNavigate } from "react-router-dom";

export const CongSignup = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <ContentContainer>
        <CongIllust />
        <h3>Parabéns, você conseguiu!</h3>
        <p>Bem vindo ao time de usuários e colaboradores Elektro</p>
      </ContentContainer>
      <button onClick={() => navigate("/")}>
        <NextIcon />
      </button>
    </Container>
  );
};

import {
  Container,
  IconContainer,
  InputContainer,
  OptionsContainer,
  SigninLink,
  SignupButton,
  SignupForm,
  SignupHeader,
  SignupOptions,
} from "./styles";
import { useNavigate } from "react-router-dom";
import ElektroIcon from "../../assets/elektro-logo.svg";
import EmailIcon from "../../assets/email-icon.svg";
import PasswordIcon from "../../assets/password-icon.svg";
import ReturnIcon from "../../assets/return-icon.svg";
import UserIcon from "../../assets/profile-icon2.svg";
import FacebookLogo from "../../assets/facebook-logo2.svg";
import GoogleLogo from "../../assets/google-logo.svg";

export const Signin = () => {
  const navigate = useNavigate();

  return (
    <>
      <SignupHeader>
        <div onClick={() => navigate(-1)}>
          <ReturnIcon />
        </div>
        <h2>Entrar</h2>
        <div onClick={() => navigate("/perfil")}>
          <UserIcon />
        </div>
      </SignupHeader>
      <Container>
        <IconContainer>
          <ElektroIcon />
        </IconContainer>
        <SignupForm>
          <InputContainer>
            <EmailIcon />
            <input type="email" placeholder="Digite seu e-mail" />
          </InputContainer>
          <InputContainer>
            <PasswordIcon />
            <input type="password" placeholder="********" />
          </InputContainer>
          <a href="/">Esqueci minha senha</a>
          <SignupButton onClick={() => navigate("/")}>Entrar</SignupButton>
        </SignupForm>
        <SignupOptions>
          <OptionsContainer>
            <button>
              <FacebookLogo />
            </button>
          </OptionsContainer>
          <p>ou</p>
          <OptionsContainer>
            <button>
              <GoogleLogo />
            </button>
          </OptionsContainer>
        </SignupOptions>
        <SigninLink onClick={() => navigate("/cadastro")}>
          Não possui cadastro? Cadastra-se!
        </SigninLink>
      </Container>
    </>
  );
};

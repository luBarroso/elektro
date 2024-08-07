import {
  Container,
  InputContainer,
  OptionsContainer,
  SignupButton,
  SignupForm,
  SignupHeader,
  SignupOptions,
} from "./styles";
import { useNavigate } from "react-router-dom";
import ReturnIcon from "../../assets/return-icon.svg";
import UserIcon from "../../assets/profile-icon2.svg";
import FacebookLogo from "../../assets/facebook-logo2.svg";
import GoogleLogo from "../../assets/google-logo.svg";

export const Signup = () => {
  const navigate = useNavigate();

  return (
    <>
      <SignupHeader>
        <div onClick={() => navigate(-1)}>
          <ReturnIcon />
        </div>
        <h2>Cadastrar-se</h2>
        <div onClick={() => navigate("/perfil")}>
          <UserIcon />
        </div>
      </SignupHeader>
      <Container>
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

        <SignupForm>
          <InputContainer>
            <label>Nome</label>
            <input type="text" placeholder="Digite seu nome completo" />
          </InputContainer>
          <InputContainer>
            <label>CPF</label>
            <input type="text" placeholder="Digite seu CPF" />
          </InputContainer>
          <InputContainer>
            <label>Telefone</label>
            <input type="text" placeholder="Digite seu telefone" />
          </InputContainer>
          <InputContainer>
            <label>E-mail</label>
            <input type="email" placeholder="Digite seu e-mail" />
          </InputContainer>
          <InputContainer>
            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha" />
          </InputContainer>
          <InputContainer>
            <label>Confirme sua senha</label>
            <input type="password" placeholder="Confirme sua senha" />
          </InputContainer>
          <SignupButton onClick={() => navigate(`concluido`)}>
            Cadastrar-se!
          </SignupButton>
        </SignupForm>
      </Container>
    </>
  );
};

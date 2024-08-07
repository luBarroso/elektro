import styled from "styled-components";

export const SignupHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px 32px 15px 32px;
  /* offset-x | offset-y | blur-radius | color */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);

  h2 {
    font-weight: 500;
    font-size: 1.5rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-top: 40px;
  gap: 30px;
`;

export const IconContainer = styled.div`
  display: flex;
  width: 100%;

  svg {
    width: 100%;
    height: 300px;
  }
`;

export const SignupOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  p {
    position: relative;
    align-self: flex-start;
    bottom: 8px;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-top: 2px solid #2b2b2b;
  padding-top: 20px;
  width: 35%;

  button {
    background: #2b2b2b;
    border: 0;
    border-radius: 50%;
    padding: 18px;
  }
`;

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: 20px;

  a {
    align-self: flex-end;
    color: #2b2b2b;
    font-size: 0.875rem;
    font-weight: 400;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 5px;
  border-bottom: 1px solid #b9b9b9;

  input {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    background-color: transparent;
    border: 0;
    width: 100%;
    padding: 5px 0 5px 0;
    outline: none;

    &::placeholder {
      color: #b9b9b9;
    }
  }
`;

export const SignupButton = styled.button`
  color: #f5f5f5;
  background: #2b2b2b;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  padding: 10px;
  border-radius: 16px;
  width: 50%;
  align-self: center;
  border: 0;
`;

export const SigninLink = styled.a`
  color: #0271a0;
  text-decoration: underline;
`;

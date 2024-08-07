import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 10px 30px 10px 30px;
  gap: 30px;
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const LoginButton = styled.button`
  border: 0;
  background: #2b2b2b;
  border-radius: 16px;
  color: #f5f5f5;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  padding: 10px;
  width: 140px;
`;

export const UserButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const Button = styled.button`
  width: 100%;
  background: #f5f5f5;
  border: 0;
  border-radius: 16px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.08);
  padding: 5px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  padding: 10px 20px 10px 20px;
`;

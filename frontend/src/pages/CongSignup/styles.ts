import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 30px;
  gap: 10vh;

  button {
    align-self: flex-end;
    border: 0;
    outline: 0;
    border-radius: 50%;
    background: #d9d9d9;
    padding: 10px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  text-align: center;

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
  }
`;

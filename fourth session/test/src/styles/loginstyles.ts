import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f4f4f9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoginCard = styled.div`
  background-color: #e7e3f7;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginImage = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 20px;
`;

export const LoginInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  background-color: #76b947;
  color: white;
  border: none;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: #63983d;
  }
`;

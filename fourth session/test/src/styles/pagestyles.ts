import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  margin: 0 auto;
  max-width: 800px;
  background: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
`;

export const Title = styled.h1`
  color: #333;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  box-sizing: border-box;
`;

export const Form = styled.form`
  background: white;
  padding: 20px;
  border-radius: 8px;
`;

export const ErrorMsg = styled.p`
  color: red;
`;

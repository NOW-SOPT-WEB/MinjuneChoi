import styled from 'styled-components';


export const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

export const StyledForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled.input`
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 80%;
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  margin: 10px;
  border-radius: 4px;
  background-color: #76b947;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #63983d;
  }
`;

export const Title = styled.h1`
  color: #333;
`;

export const ErrorMessage = styled.p`
  color: red;
`;

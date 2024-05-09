import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
  text-align: center;
  margin-top: 50px;
`;

export const StyledImage = styled.img`
    width: 150px;
    height: auto;
    margin-bottom: 20px;
`;

export const StyledLink = styled(RouterLink)`
  display: inline-block;
  background-color: #76b947;
  color: white;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 4px;
  text-decoration: none;
  &:hover {
    background-color: #63983d;
  }
`;

export const Title = styled.h1`
  color: #333;
  font-size: 24px;
`;
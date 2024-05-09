
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, StyledImage, StyledLink, Title } from './styles/homestyles';

const HomePage: React.FC = () => {
  const { memberId } = useParams<{ memberId: string }>();


  return (
    <Container>
      <StyledImage src="/솝트.jpg" alt="Welcome Image" />
      <Title>Main Page</Title>
      <StyledLink to="/signup">회원가입</StyledLink>
      <StyledLink to={`/page/${memberId}`}>내정보</StyledLink>
    </Container>
  );
}

export default HomePage;

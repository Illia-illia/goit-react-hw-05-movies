import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, StyledLink, Nav } from './App.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

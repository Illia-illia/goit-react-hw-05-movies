import { Routes, Route } from 'react-router-dom';

import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { NotFound } from './NotFound/NotFound';

import { Wrap, Nav, StyledLink } from './App.styled';

export const App = () => {
  return (
    <Wrap>
      <Nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Wrap>
  );
};

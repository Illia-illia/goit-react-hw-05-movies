import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  align-items: center;
`;

export const Nav = styled.nav`
  background-color: #f5f5f5;
  display: flex;
  gap: 15px;
  padding-left: 15px;
  padding-right: 15px;

  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 25px;
  line-height: 1.14;
  font-weight: 500;
  letter-spacing: 0.02em;
  border-bottom: #212121 solid 1px;
  box-shadow: 0 4px 2px -2px gray;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  padding-top: 32px;
  padding-bottom: 32px;
  color: #212121;

  &.active {
    color: #2c8759;
    box-shadow: 0px 7px 0px 0px rgb(44 135 89);
  }
`;

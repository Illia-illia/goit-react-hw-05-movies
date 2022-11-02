import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Main = styled.main`
  background-color: #f5f5f5;
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  max-width: 280px;
  justify-content: center;
  grid-gap: 20px;
  grid-auto-rows: auto;
  padding-top: 20px;
  padding-bottom: 40px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
    padding-top: 60px;
    padding-bottom: 60px;
    max-width: 700px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px 16px;
    max-width: 1200px;
  }
`;

export const Link = styled(NavLink)`
  color: #212121;
  width: 300px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 600ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const Img = styled.img`
  width: 300px;
  height: 398px;
  object-fit: cover;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 455px;
  }

  @media screen and (min-width: 1280px) {
    width: 390px;
    height: 574px;
  }
`;

export const TextWrap = styled.div`
  margin-right: auto;
  padding: 10px 5px;

  @media screen and (min-width: 768px) {
    padding-top: 8px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 12px;
  }
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0.04em;
  padding-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 20px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px
    line-height: 24px;
  }
`;

export const Text = styled.p`
  letter-spacing: 0.04em;
  color: #ff6b08;
  font-size: 18px;
  font-weight: 500;
  line-height: 16px;
`;

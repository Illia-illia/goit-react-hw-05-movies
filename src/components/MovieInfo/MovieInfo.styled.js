import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
`;

export const Link = styled(NavLink)`
  font-family: Teko;
  font-weight: 0;
  font-size: 16px;
  color: #ffffff;
  background: linear-gradient(90deg, #818589 0%, #28a718 100%);
  padding: 10px 47px;
  border: none;
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
  border-radius: 22px 50px;
  transition: 327ms;
  transform: translateY(0);
  width: 55px;
  margin: 15px 0;
  &:hover,
  &:focus {
    transition: 327ms;
    padding: 10px 50px;
    transform: translateY(-0px);
    background: linear-gradient(90deg, #818589 0%, #cfe70b 100%);
    color: #ffffff;
    border: none;
  }
  &.active {
    transition: 327ms;
    padding: 10px 50px;
    transform: translateY(-0px);
    background: linear-gradient(90deg, #818589 0%, #f5350a 100%);
    color: #ffffff;
    border: none;
  }
`;

export const GoBackLink = styled(NavLink)`
  font-family: Teko;
  font-weight: 0;
  font-size: 16px;
  color: #ffffff;
  background: linear-gradient(90deg, #818589 0%, #28a718 100%);
  padding: 10px 47px;
  border: none;
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
  border-radius: 22px 50px;
  transition: 327ms;
  transform: translateY(0);
  width: 55px;
  margin: 15px 0;
  &:hover,
  &:focus {
    transition: 327ms;
    padding: 10px 50px;
    transform: translateY(-0px);
    background: linear-gradient(90deg, #818589 0%, #cfe70b 100%);
    color: #ffffff;
    border: none;
  }
`;

export const PosterWrap = styled.div`
  display: flex;
`;

export const Img = styled.img`
  width: 300px;
  height: 398px;
  object-fit: cover;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

export const InfoWrap = styled.div`
  margin: 15px;
  width: 500px;
`;

export const Item = styled.div`
  padding: 15px 0;
`;

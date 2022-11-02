import styled from 'styled-components';

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

export const Item = styled.li`
  background-color: gray;
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

export const Text = styled.p`
  padding: 10px;
  letter-spacing: 0.04em;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  line-height: 16px;
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 400px;
  margin: 70px auto 0;
  padding: 0px;

  text-align: center;
`;

export const Title = styled.h2`
  font-size: 32px;
  color: #000;
`;

export const Text = styled.p`
  font-size: 18px;
  color: #000;
`;

export const Link = styled(NavLink)`
  color: #000;
  font-size: 32px;
  font-weight: 500;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #a16a93;
  }
`;

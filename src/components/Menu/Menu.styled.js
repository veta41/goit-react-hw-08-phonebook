import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.div``;

export const MenuLink = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  color: #fff;

  margin-left: 20px;
  margin-right: 20px;

  &:hover {
    color: #643969;
  }

  &.active {
    color: #643969;

    &:hover {
      color: #643969;
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
`;

export const UserInfoTitle = styled.span`
  margin-right: 5px;
`;

export const Button = styled.button`
  display: inline-block;
  background-color: #fff;
  color: #a16a93;
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #a16a93;
  }
`;

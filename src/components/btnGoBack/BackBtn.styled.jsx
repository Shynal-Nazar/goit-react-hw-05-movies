import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Search = styled(NavLink)`
  text-decoration: none;
  padding: 14px;
  border: 6px solid #282727;
  border-radius: 20px;
  background-color: #413e3e;
  color: antiquewhite;
  :hover {
    background-color: #ef0d0d;
    transition: all 1s linear 0s;
  }
`;

export const Btn = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
`;

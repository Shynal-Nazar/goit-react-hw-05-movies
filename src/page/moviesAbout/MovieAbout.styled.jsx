import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  max-width: 1000px;
  border-radius: 8px;
  box-shadow: 0 5px 10px rgb(0 0 0 / 50%);
  margin: 0 auto 20px;
  padding: 20px;
  font-family: 'Times New Roman', Times, serif;
  color: #faebd7;
  background-color: #253334;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  font-size: 18px;
`;

export const FirstTitle = styled.h1`
  margin: 0;
`;

export const SecondTitle = styled.h2`
  margin: 0;
`;

export const ThirdTitle = styled.h3`
  margin: 0;
`;

export const Img = styled.img`
  display: block;
  width: 250px;
  height: 350px;
  border-radius: 8px;
`;
export const ImgWrapper = styled.div`
  display: flex;
`;

export const LinkDetail = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  border: 3px solid grey;
  padding: 8px;
  border-radius: 20px;
  color: #faebd7;
  :not(:last-child) {
    margin-right: 30px;
  }
  :hover {
    background-color: #2196f3;
    transition: all 1s linear 0s;
  }
`;

export const MovieInfo = styled.div`
  border-top: 5px solid grey;
  padding-top: 30px;
`;

import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  background-color: #939393;
  padding-bottom: 20px;
  padding: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 20px;
  border: 5px solid #282727;
  background-color: white;
  color: black;
`;

export const Button = styled.button`
  font-size: 18px;
  font-weight: bold;
  border-radius: 20px;
  border: 5px solid #282727;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  background-color: #413e3e;
  color: antiquewhite;
  :hover {
    background-color: #ef0d0d;
    transition: all 1s linear 0s;
  }
`;

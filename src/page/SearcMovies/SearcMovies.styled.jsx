import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  background-color: #253334;
  padding-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 20px;
  border: 5px solid grey;
`;

export const Button = styled.button`
  font-size: 18px;
  font-weight: bold;
  border-radius: 20px;
  border: 5px solid grey;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :hover {
    color: azure;
    background-color: #253334;
  }
`;

import styled from '@emotion/styled';

export const CastList = styled.ul`
  list-style: none;
  display: grid;
  place-items: center;
  padding-top: 20px;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
`;
export const ListItem = styled.li`
  width: 160px;
  height: 100%;
  text-align: center;
  border: 1px solid grey;
  border-radius: 10px;
  overflow: hidden;
`;

import styled from '@emotion/styled';

export const GridContainer = styled.div`
  padding: 0px 30px;
  margin: 0px auto;
  background-color: yellow;
`;

export const GridList = styled.ul`
  display: grid;
  max-width: calc(100vw - 30px);
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 30px;
  margin: 0px auto;
  padding: 15px 20px 0px;
  list-style: none;
`;

export const GalleryCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #253334;
  border-radius: 10px;
  border: 5px solid grey;
  :hover {
    cursor: pointer;
    transform: scale(1.05) translateY(-5px);
    box-shadow: rgb(0 0 0 / 55%) 0px 5px 14px 2px;
  }
`;

export const GalleryImg = styled.div``;

export const CardImg = styled.img`
  width: 100%;
  height: 355px;
  border-radius: 5px;
  object-fit: cover;
`;

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const CardTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
`;

export const CardRate = styled.span`
  padding: 0 10px;
  margin-left: 10px;
  background-color: #ff6b08;
  color: #fff;
  border-radius: 5px;
`;

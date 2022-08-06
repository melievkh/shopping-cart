import styled from 'styled-components';
import mobile from '../../styles/media/media';

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  flex-wrap: wrap;
  padding: 100px 220px;
  gap: 50px;
  background-color: white;
  ${mobile} {
    padding: 80px 0;
    gap: 10px;
    justify-content: space-evenly;
  }
`;

export const Card = styled.div`
  width: 270px;
  height: 360px;
  display: flex;
  flex-direction: column;
  ${mobile} {
    width: 190px;
    height: 240px;
  }
`;

export const CardMedia = styled.img`
  width: 100%;
  height: 240px;
  border-radius: 8px;
`;

export const CardDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px;
  box-sizing: border-box;
`;

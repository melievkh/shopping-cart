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
  gap: 30px;
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
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  ${mobile} {
    width: 190px;
    height: 240px;
  }
`;

export const CardMedia = styled.img`
  width: 100%;
  height: 240px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  /* padding: 6px; */
`;

export const CardDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px;
  box-sizing: border-box;
`;

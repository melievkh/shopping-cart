import styled from 'styled-components';
import mobile from '../../styles/media/media';

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  flex-wrap: wrap;
  padding: 80px 80px;
  gap: 20px;
  background-color: white;
  ${mobile} {
    width: auto;
    padding: 80px 0;
    gap: 10px;
    justify-content: space-evenly;
  }
`;

export const Card = styled.div`
  width: 280px;
  height: 360px;
  display: flex;
  flex-direction: column;
  ${mobile} {
    width: 160px;
    height: 220px;
  }
`;

export const CardMedia = styled.div`
  max-width: 100%;
  height: 190px;
  transition: all 0.4s ease-in-out;
  display: block;
  border-radius: 8px;
  padding: 14px 14px;
  &:hover {
    transform: scale(1.04);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const CardDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px;
  box-sizing: border-box;
`;

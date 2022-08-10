import styled from 'styled-components';
import colors from '../../styles/color/colors';
import mobile from '../../styles/media/media';

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  background-color: #fafbfc;
  span {
    color: ${colors.red};
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  flex-wrap: wrap;
  gap: 20px;
  padding: 40px 80px;
  ${mobile} {
    width: auto;
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
    width: 160px;
    height: 220px;
  }
`;

export const CardMedia = styled.div`
  width: 100%;
  height: 60%;
  background-color: green;
  display: inline-block;
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    display: block;
    transition: transform 0.9s;
  }
  &:hover img {
    transform: scale(1.2);
    transform-origin: 50% 50%;
    opacity: 0.4s;
  }
`;

export const CardDetails = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px;
  box-sizing: border-box;
`;

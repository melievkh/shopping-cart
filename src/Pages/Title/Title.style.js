import styled from 'styled-components';
import mobile from '../../styles/media/media';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(2, 3, 10, 0.2), rgba(5, 3, 12, 0.2)),
    url('https://cdn.delever.uz/delever/3148e595-dc63-4f44-9acc-b17cb3e870ca')
      center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile} {
    width: auto;
  }
`;

export const TitleContainer = styled.div`
  width: 800px;
  height: 260px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  ${mobile} {
    width: auto;
  }
`;

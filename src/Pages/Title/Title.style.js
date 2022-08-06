import styled from 'styled-components';
import mobile from '../../styles/media/media';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(5, 3, 23, 0.2), rgba(5, 3, 143, 0.2)),
    url('http://billionnews.ru/uploads/posts/2016-12/1481043901_1.jpg')
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

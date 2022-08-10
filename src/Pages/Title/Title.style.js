import styled from 'styled-components';
import mobile from '../../styles/media/media';

export const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  background: linear-gradient(rgba(5, 3, 23, 0.2), rgba(5, 3, 143, 0.2)),
    url('https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-food-festival-food-promotion-banner-poster-image_192184.jpg') center
      center;
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
  height: 240px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  ${mobile} {
    width: auto;
  }
`;

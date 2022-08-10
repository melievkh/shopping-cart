import styled from 'styled-components';
import colors from '../../../styles/color/colors';
import mobile from '../../../styles/media/media';
import FlexBox from '../../Flexbox/FlexBox';

export const Wrapper = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 28px;
    ${mobile}{
      font-size: 22px;
    }
  }
`;

export const DropdownContent = styled.div`
  width: 260px;
  height: fit-content;
  max-height: 350px;
  display: none;
  margin-left: -300px;
  position: absolute;
  border-radius: 8px;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  z-index: 1;
  padding: 10px 20px;
  ${mobile} {
    width: 220px;
    margin-left: -240px;
  }
`;

export const Dropdown = styled.div`
  color: white;
  font-size: 30px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  &:hover ${DropdownContent} {
    display: block;
  }
`;

export const ProductsList = styled.div`
  height: 80%;
  max-height: 300px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
`;
export const ButtonsContainer = styled(FlexBox)`
  width: 100%;
  height: 50%;
  gap: 8px;
`;

export const Cards = styled.div`
  height: 70px;
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  box-sizing: border-box;
  border-bottom: 1px solid ${colors.azure};
`;
export const CardMedia = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
`;
export const OrderButton = styled.div`
  height: 20%;
  display: flex;
  justify-content: space-evenly;
`;

export const AmountDisplayer = styled.p`
  width: 16px;
  height: 16px;
  position: absolute;
  top: -6px;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background-color: red;
  color: white;
  border-radius: 100%;
`;

export const BasketWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  svg {
    color: ${colors.blue};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

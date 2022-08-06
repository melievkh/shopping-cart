import styled from 'styled-components';
import colors from '../../../styles/color/colors';
import mobile from '../../../styles/media/media';
import Button from '../../Button/Button';

export const Wrapper = styled.div`
  width: 100%;
  height: 65px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  position: fixed;
  svg {
    color: ${colors.blue};
    font-size: 26px;
    cursor: pointer;
  }
`;

export const DropdownContent = styled.div`
  width: 140px;
  height: fit-content;
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  border-radius: 4px;
  min-width: 100px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 0;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
    list-style-type: none;
    border-bottom: 1px solid grey;
    cursor: pointer;
    svg {
      font-size: 20px;
      ${mobile} {
        font-size: 14px;
      }
    }
    &:hover {
      background-color: #f2f3f5;
    }
    ${mobile} {
      text-indent: 4px;
      height: 26px;
      font-size: 10px;
      justify-content: start;
    }
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  flex-direction: row;
  &:hover ${DropdownContent} {
    display: block;
  }
`;

export const RegisterButton = styled(Button)`
  &:hover {
    background-color: ${({ bgColor }) => bgColor || '#dfe7f5'};
  }
  ${mobile} {
    display: none;
  }
`;

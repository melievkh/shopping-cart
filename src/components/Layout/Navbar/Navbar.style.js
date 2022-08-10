import styled from 'styled-components';
import colors from '../../../styles/color/colors';
import mobile from '../../../styles/media/media';
import Button from '../../Button/Button';

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  top: 0;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  span {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    ${mobile} {
      width: 34px;
      height: 34px;
    }
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
  li {
    display: flex;
    align-items: start;
    color: ${colors.grey};
    text-indent: 4px;
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
  ${mobile} {
    margin-left: -50px;
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  flex-direction: row;
  svg {
    font-size: 30px;
    color: ${colors.blue};
    cursor: pointer;
    ${mobile} {
      font-size: 24px;
    }
  }
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

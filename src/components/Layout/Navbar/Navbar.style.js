import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';
import mobile from '../../../styles/media';
import Button from '../../Button/Button';

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  top: 0;
  background-color: ${({ theme }) => theme.header};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 0 80px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  ${mobile} {
    padding: 0;
  }
`;

export const DropdownContent = styled.div`
  width: 140px;
  height: fit-content;
  margin-left: -100px;
  display: none;
  position: absolute;
  background-color: ${({theme})=> theme.bgColor};
  border-radius: 14px;
  border-top-right-radius: 0;
  min-width: 100px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 10px 10px;
  span {
    font-size: 12px;
  }
  li {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    color: ${COLORS.grey};
    cursor: pointer;
    svg {
      font-size: 18px;
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
  svg {
    font-size: 12px;
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
    color: ${COLORS.blue};
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

export const SwitchButton = styled(Button)`
  width: 30px;
  height: 30px;
  font-size: 20px;
  border-radius: 100%;
  margin-left: 30px;
`;

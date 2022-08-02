import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../../styles/color/colors';

export const Wrapper = styled.div`
  width: fit-content;
  height: 100%;
  background-color: ${colors.bgColor};
  position: relative;
  box-sizing: border-box;
  padding: 0 20px;
  gap: 30px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  svg {
    font-size: 26px;
    color: ${colors.avatar};
  }
`;

export const SidebarToggler = styled.button`
  width: 36px;
  height: 36px;
  color: grey;
  background-color: white;
  border: none;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  right: -16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.3) 0px 0px 1px 0px;
  cursor: pointer;
  transform: ${({ isOpen }) => !isOpen && `rotate(180deg)`};
`;

export const StyledLink = styled(Link)`
  display: flex;
  gap: 10px;
  justify-content: start;
  align-items: center;
  text-decoration: none;
`;

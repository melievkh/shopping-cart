import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import mobile from "../../styles/media";

const Button = styled.button`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "35px"};
  background-color: ${({ bgColor }) => bgColor || COLORS.special};
  border: ${({ border }) => border || "none"};
  color: ${COLORS.white};
  font-weight: 600;
  font-size: 16px;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${({ bgColor }) => bgColor || "#f77e7e"};
    transition: 0.3s;
  }
  ${mobile} {
    height: 20px;
    font-size: 14px;
  }
`;

export default Button;

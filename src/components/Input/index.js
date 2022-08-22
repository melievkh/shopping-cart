import styled from "styled-components";
import { COLORS } from "../../styles/colors";

const Input = styled.input`
  width: ${({ width }) => width || "100%"};
  height: 35px;
  outline: none;
  border-radius: 8px;
  text-indent: 10px;
  border: none;
  box-shadow: ${COLORS.text} 0px 0px 2px;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export default Input;

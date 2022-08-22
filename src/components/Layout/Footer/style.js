import styled from "styled-components";
import { COLORS } from "../../../styles/colors";
import mobile from "../../../styles/media";

export const Wrapper = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: ${COLORS.blue};
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    gap: 40px;
    ${mobile} {
      gap: 20px;
    }
    li {
      font-size: 20px;
      color: ${COLORS.white};
      cursor: pointer;

      ${mobile} {
        font-size: 12px;
      }
    }
  }
  svg {
    font-size: 28px;
    &:hover {
      margin-top: -10px;
      transition: 0.3s;
    }
    ${mobile} {
      font-size: 16px;
    }
  }
  ${mobile} {
    height: 140px;
    gap: 10px;
  }
`;

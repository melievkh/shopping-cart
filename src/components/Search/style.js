import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import mobile from "../../styles/media";
import Button from "../Button";
import Input from "../Input";

export const Form = styled.form`
  width: fit-content;
  display: flex;
  flex-direction: row;
`;

export const SearchInput = styled(Input)`
  width: 400px;
  border-radius: 4px 0 0 4px;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.heading};

  ${mobile} {
    width: 120px;
    height: 30px;
  }
`;

export const SearchButton = styled(Button)`
  width: 30px;
  margin-left: -28px;
  border-radius: 0 2px 2px 0;
  color: ${COLORS.white};

  svg {
    color: white;
  }

  ${mobile} {
    height: 30px;
  }
`;

import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import mobile from '../../styles/media';
import Button from '../Button/Button';
import Input from '../Input/Input';

export const Form = styled.form`
  width: fit-content;
  display: flex;
  flex-direction: row;
`;

export const SearchInput = styled(Input)`
  width: 400px;
  border-radius: 4px 0 0 4px;
  border: 1px solid ${COLORS.azure};
  background-color: ${({theme})=> theme.bgColor};
  ${mobile} {
    width: 120px;
    height: 30px;
  }
`;

export const SearchButton = styled(Button)`
  width: 30px;
  border-radius: 0 4px 4px 0;
  border: 1px solid ${COLORS.azure};
  ${mobile} {
    height: 30px;
  }
`;

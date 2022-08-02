import styled from 'styled-components';
import mobile from '../../../styles/media/media';
import Input from '../../Input/Input';

export const Form = styled.form`
  width: fit-content;
  display: flex;
  flex-direction: row;
`;

export const SearchInput = styled(Input)`
  width: 400px;
  border-radius: 4px 0 0 4px;
  border: 1px solid grey;
  background-color: #f8f7fa;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  ${mobile} {
    width: 160px;
    height: 22px;
  }
`;

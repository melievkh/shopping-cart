import styled from 'styled-components';

const Input = styled.input`
  width: ${({ wd }) => wd || '100%'};
  height: 35px;
  outline: none;
  border-radius: 8px;
  border: ${({ border }) => border || '0.5px solid grey'};
  text-indent: 10px;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &:focus {
      border: 1px solid #5ca5ed;
    }
`;

export default Input;

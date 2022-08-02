import styled from 'styled-components';
import colors from '../../styles/color/colors'

export const Form = styled.form`
  width: 350px;
  height: fit-content;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-evenly;
  padding: 20px 25px;

  textarea {
    width: 100%;
    height: 80px;
    outline: none;
    border-radius: 8px;
    border: 0.5px solid grey;
    text-indent: 10px;
    resize: none;
    &:focus {
      border: 1px solid #5ca5ed;
    }
  }
  svg {
    color: ${colors.blue};
    font-size: 24px;
  }
`;

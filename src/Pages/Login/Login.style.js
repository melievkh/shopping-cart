import styled from 'styled-components';
import FlexBox from '../../components/Flexbox/FlexBox';

export const Wrapper = styled(FlexBox)`
  width: 100%;
  height: 100vh;
`;

export const Form = styled.form`
  padding: 30px;
  width: 300px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 8px;
`;

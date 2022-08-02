import styled from 'styled-components';
import FlexBox from '../../components/Flexbox/FlexBox';

export const Wrapper = styled(FlexBox)`
  width: 100%;
  height: 100vh;
`;

export const Form = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 4px;
  padding: 30px 40px;
`;

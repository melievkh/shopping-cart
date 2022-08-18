import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';
import mobile from '../../../styles/media';

export const Wrapper = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: linear-gradient(
    90deg,
    rgba(73, 0, 244, 1) 0%,
    rgba(45, 14, 184, 1) 26%,
    rgba(58, 116, 230, 1) 100%,
    rgba(23, 2, 113, 1) 100%,
    rgba(109, 80, 199, 1) 100%,
    rgba(168, 152, 213, 1) 100%,
    rgba(142, 154, 157, 1) 100%,
    rgba(30, 37, 46, 1) 100%
  );
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
      color: ${COLORS.azure};
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

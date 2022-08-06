import styled from 'styled-components';
import colors from '../../../styles/color/colors';
import mobile from '../../../styles/media/media';

export const Wrapper = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 26px;
  background-color: ${colors.blue};
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
      color: ${colors.avatar};
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
  hr {
    width: 85%;
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      #fff,
      rgba(0, 0, 0, 0)
    );
  }
  ${mobile} {
    height: 140px;
    gap: 10px;
  }
`;

import styled, { css } from 'styled-components';
import { COLORS } from '../../styles/colors';
import mobile from '../../styles/media';

const textSize = {
  sm: css`
    font-size: 12px;
    ${mobile} {
      font-size: 8px;
    }
  `,
  md: css`
    font-size: 14px;
    ${mobile} {
      font-size: 10px;
    }
  `,
  lg: css`
    font-size: 20px;
    ${mobile} {
      font-size: 14px;
    }
  `,
};

const Text = styled.h1`
  ${({ size }) => textSize[size || 'md']};
  color: ${({ theme }) => theme.text};
  text-align: ${({ align }) => align || 'center'};
  margin: ${({ margin }) => margin || 0};
  font-family: sans-serif;
  font-weight: 100;
`;

export default Text;

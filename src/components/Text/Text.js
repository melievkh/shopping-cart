import styled, { css } from 'styled-components';
import colors from '../../styles/color/colors';
import mobile from '../../styles/media/media';

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
    font-size: 16px;
    ${mobile} {
      font-size: 14px;
    }
  `,
};

const Text = styled.h1`
  ${({ size }) => textSize[size || 'md']};
  color: ${({ secondary }) => (secondary ? colors.blue : colors.heading)};
  text-align: ${({ align }) => align || 'center'};
  margin: ${({ margin }) => margin || 0};
  font-family: monospace;
`;

export default Text;

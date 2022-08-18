import styled, { css } from 'styled-components';
import mobile from '../../styles/media';

const headingSize = {
  sm: css`
    font-size: 16px;
    ${mobile} {
      font-size: 12px;
    }
  `,
  md: css`
    font-size: 20px;
    ${mobile} {
      font-size: 10px;
    }
  `,
  lg: css`
    font-size: 30px;
    ${mobile} {
      font-size: 18px;
    }
  `,
};

const Heading = styled.h1`
  ${({ size }) => headingSize[size || 'md']};
  color: ${({theme})=> theme.heading};
  text-align: ${({ align }) => align || 'center'};
  margin: ${({ margin }) => margin || 0};
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 100;
`;

export default Heading;

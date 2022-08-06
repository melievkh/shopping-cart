import styled from 'styled-components';
import colors from '../../styles/color/colors';
import mobile from '../../styles/media/media';

const Button = styled.button`
  width: ${({ wd }) => wd || '100%'};
  height: ${({ hg }) => hg || '35px'};
  background-color: ${({ bgColor }) => bgColor || colors.azure};
  border: ${({ border }) => border || 'none'};
  color: ${colors.blue};
  font-weight: 600;
  font-size: 16px;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${({ bgColor }) => bgColor || '#dfe7f5'};
    transition: 0.3s;
  }
  ${mobile} {
    height: 22px;
  }
`;

export default Button;

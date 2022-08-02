import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  gap: ${({ gap }) => gap};
  background-color: ${({ bgColor }) => bgColor};
  width: ${({ wd }) => wd};
  height: ${({ hg }) => hg};
`;

export default FlexBox;

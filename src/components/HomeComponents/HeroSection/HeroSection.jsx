import React from 'react';
import { COLORS } from '../../../styles/colors';
import Heading from '../../Heading/Heading';
import { TitleButton, TitleContainer, Wrapper } from './HeroSection.style';

const HeroSection = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <Heading align="start" style={{ fontSize: '40px', fontWeight: 'bold', color: COLORS.azure }}>
          Milliy Taomlar <br /> Uyga yetkazib berish xizmati bilan!
        </Heading>
        <a href="#products">
          <TitleButton>Menyuga o'tish</TitleButton>
        </a>
      </TitleContainer>
    </Wrapper>
  );
};

export default HeroSection;

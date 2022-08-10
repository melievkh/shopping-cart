import React from 'react';
import Heading from '../../Heading/Heading';
import { TitleButton, TitleContainer, Wrapper } from './HeroSection.style';

const HeroSection = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <Heading
          secondary
          align="start"
          style={{ fontSize: '40px', fontWeight: 'bold' }}
        >
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

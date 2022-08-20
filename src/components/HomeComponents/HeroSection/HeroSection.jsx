import { Link } from '@mui/material';
import React from 'react';
import Heading from '../../Heading/Heading';
import { TitleButton, TitleContainer, Wrapper } from './HeroSection.style';

const HeroSection = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <Heading align="start" style={{ fontSize: '40px', fontWeight: 'bold', color: '#fff' }}>
          Milliy Taomlar <br /> Uyga yetkazib berish xizmati bilan!
        </Heading>
        <Link to='/'>
          <TitleButton>Menyuga o'tish</TitleButton>
        </Link>
      </TitleContainer>
    </Wrapper>
  );
};

export default HeroSection;

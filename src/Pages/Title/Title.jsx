import React from 'react';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import { TitleButton, TitleContainer, Wrapper } from './Title.style';

const Title = () => {
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
          <TitleButton>
            Menyuga o'tish
          </TitleButton>
        </a>
      </TitleContainer>
    </Wrapper>
  );
};

export default Title;

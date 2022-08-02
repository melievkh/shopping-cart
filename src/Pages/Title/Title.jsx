import React from 'react';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import { TitleContainer, Wrapper } from './Title.style';

const Title = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <Heading
          secondary
          align="start"
          style={{ fontSize: '40px', fontWeight: '600' }}
        >
          Milliy Taomlar <br /> Uyga yetkazib berish xizmati bilan!
        </Heading>
        <Button wd="160px">Menyuga o'tish</Button>
      </TitleContainer>
    </Wrapper>
  );
};

export default Title;

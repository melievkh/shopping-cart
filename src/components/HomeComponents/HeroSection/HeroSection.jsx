import { Link } from "@mui/material";
import React from "react";
import {
  TitleHeading,
  TitleButton,
  TitleContainer,
  Wrapper,
} from "./HeroSection.style";

const HeroSection = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <TitleHeading>
          Milliy Taomlar <br /> Uyga yetkazib berish xizmati bilan!
        </TitleHeading>
        <Link to="/">
          <TitleButton>Menyuga o'tish</TitleButton>
        </Link>
      </TitleContainer>
    </Wrapper>
  );
};

export default HeroSection;

import React from 'react';
import { Wrapper } from './Footer.style';
import { FaTelegram, FaInstagram, FaYoutube } from 'react-icons/fa';
import Heading from '../../Heading/Heading';
import FlexBox from '../../Flexbox/FlexBox';
import colors from '../../../styles/color/colors';

const Footer = () => {
  return (
    <Wrapper>
      <Heading secondary size="lg">
        logo
      </Heading>
      <ul>
        <li>Asosiy</li>
        <li>Biz haqimizda</li>
        <li>Aloqa</li>
      </ul>
      <FlexBox row wd="80%" justifyContent="space-between">
        <Heading style={{ color: colors.avatar }}>
          Ijtimoiy tarmoqlarimiz
        </Heading>
        <ul>
          <li>
            <FaTelegram />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaYoutube />
          </li>
        </ul>
      </FlexBox>
      <hr />
      <FlexBox row wd="85%" justifyContent="space-between">
        <Heading style={{ color: colors.avatar }}>
          Foydalanish shartlari
        </Heading>
        <Heading style={{ color: colors.avatar }}>
          Melievkh tomonidan ishlab chiqilgan
        </Heading>
      </FlexBox>
    </Wrapper>
  );
};

export default Footer;

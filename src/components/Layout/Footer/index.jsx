import React from "react";
import { Wrapper } from "./style";
import { FaTelegram, FaInstagram, FaYoutube } from "react-icons/fa";
import Heading from "../../Heading";
import Flexbox from "../../Flexbox";
import { COLORS } from "../../../styles/colors";

const Footer = () => {
  return (
    <Wrapper>
      <Heading size="lg" style={{ color: COLORS.white }}>
        logo
      </Heading>
      <ul>
        <li>Asosiy</li>
        <li>Biz haqimizda</li>
        <li>Aloqa</li>
      </ul>
      <Flexbox row width="80%" justifyContent="space-between">
        <Heading style={{ color: COLORS.white }}>
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
      </Flexbox>
      <hr />
      <Flexbox row width="85%" justifyContent="space-between">
        <Heading style={{ color: COLORS.white }}>Foydalanish shartlari</Heading>
        <Heading style={{ color: COLORS.white }}>
          Melievkh tomonidan ishlab chiqilgan
        </Heading>
      </Flexbox>
    </Wrapper>
  );
};

export default Footer;

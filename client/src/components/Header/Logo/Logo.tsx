import React from 'react';
import styled from "styled-components";
import LogoImg from "../../../img/logo.svg";

const LogoStyled = styled.img`
  max-width: 150px;
  width: 100%;
  height: auto;
`;

function Logo() {
  return (
    <LogoStyled src={LogoImg} alt="Koconta-articles" />
  );
}

export default Logo;
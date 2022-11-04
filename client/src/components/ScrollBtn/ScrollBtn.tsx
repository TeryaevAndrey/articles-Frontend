import React from 'react';
import styled from "styled-components";
import ScrollImg from "../../img/scroll.svg";

const ScrollBtnImg = styled.img`
  position: fixed;
  bottom: 35px;
  right: 35px;
  cursor: pointer;
`;

function ScrollBtn() {
  return (
    <ScrollBtnImg onClick={() => window.scrollTo({top: 0, behavior: "smooth"})} src={ScrollImg} alt="scroll" />
  );
}

export default ScrollBtn;
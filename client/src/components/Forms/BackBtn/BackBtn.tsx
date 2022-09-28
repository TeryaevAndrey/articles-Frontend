import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import BackImg from "../../../img/back.svg";

const BackBtnImg = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
  cursor: pointer;
  top: 20px;
  left: 25px;
`;

function BackBtn() {
  return (
    <NavLink to="/">
      <BackBtnImg src={BackImg} alt="back" />
    </NavLink>
  );
}

export default BackBtn;
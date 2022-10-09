import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { AuthContext } from '../../../context/auth.context';
import LogoImg from "../../../img/logo.svg";

const LogoStyled = styled.img`
  max-width: 150px;
  width: 100%;
  height: auto;
  cursor: pointer;
`;

function Logo() {
  const navigate = useNavigate();
  const {isAuth} = React.useContext(AuthContext);

  const transferToMain = () => {
    if(isAuth) {
      return navigate("/profile");
    } 
    
    return navigate("/");
  }

  return (
    <LogoStyled onClick={transferToMain} src={LogoImg} alt="Koconta-articles" />
  );
}

export default Logo;
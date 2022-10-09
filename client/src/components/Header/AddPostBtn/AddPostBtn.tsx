import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { AuthContext } from '../../../context/auth.context';

const BtnStyled = styled.button`
  padding: 12px 45px;
  min-width: 200px;
  min-height: 40px;
  background-color: transparent;
  border: 1px solid #4D3D3D;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background-color: #4D3D3D;
    color: #fff;
  }
`;

function AddPostBtn() {
  const auth = React.useContext(AuthContext);

  return (
    <BtnStyled as={NavLink} to={auth.isAuth ? "/add" : "/auth"} >
      Добавить статью
    </BtnStyled>
  );
}

export default AddPostBtn;
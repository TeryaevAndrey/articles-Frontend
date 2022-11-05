import React from "react";
import styled from "styled-components";
import AddPostBtn from "./AddPostBtn/AddPostBtn";
import Entrance from "./Entrance/Entrance";
import Logo from "./Logo/Logo";
import BurgerImg from "../../img/burger.svg";
import { useAppDispatch, useAppSelector } from "../../store/Hooks";
import { openMenuReducer } from "../../store/HeaderSlice";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
`;

export const Burger = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: none;

  @media (max-width: 650px) {
    display: block;
  }
`;

export const WrapperBurgerMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;

  @media (max-width: 650px) {
    display: none;
    flex-direction: column;
    position: absolute;
    right: -15px;
    top: 100%;
    height: max-content;
    background-color: #fff;
    border-radius: 20px 0 0 20px;
    padding: 20px;
    min-height: 150px;
    transition: all 0.2s ease;
    opacity: 0;
    z-index: 1000;

    &.active {
      display: flex;
      opacity: 1;
    }
  }
`;

function Header() {
  const dispatch = useAppDispatch();
  const stateMenu = useAppSelector((state) => state.header.openMenu);

  const handleBurger = () => {
    dispatch(openMenuReducer(!stateMenu));
  };

  return (
    <HeaderStyled>
      <Logo />
      <WrapperBurgerMenu className={stateMenu ? "active" : ""}>
        <Link to="/">На главную</Link>
        {/* <Link to="/favourites">Избранное</Link> */}
        <AddPostBtn />
        <Entrance />
      </WrapperBurgerMenu>
      <Burger onClick={handleBurger} src={BurgerImg} alt="menu" />
    </HeaderStyled>
  );
}

export default Header;

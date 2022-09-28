import React from 'react';
import styled, {createGlobalStyle} from "styled-components";
import Main from './pages/Main/Main';
import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Reg from './pages/Reg/Reg';
import Profile from './pages/Profile/Profile';
import AddArticle from './pages/AddArticle/AddArticle';

const GlobalStyled = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
  }

  body {
    font-size: 18px;
    font-weight: 400;
    line-height: 1;
    background-color: #FDF7F7;
    color: #4D3D3D;
    overflow-x: hidden;
  }

  a {
    color: #4D3D3D;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }
`;

const AppStyled = styled.div`
  max-width: 1180px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const TitleFilter = styled.h2`
  font-size: 35px;
  font-weight: 700px;
`;

function App() {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add" element={<AddArticle />} />
      </Routes>
      <GlobalStyled />
    </AppStyled>
  );
}

export default App;

import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Main from "./pages/Main/Main";
import { AuthContext } from "./context/auth.context";
import { useAuth } from "./hooks/auth.hook";
import { useRoutes } from "./routes";

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
  const {token, userId, login, logout, name} = useAuth();

  const isAuth = !!token;
  const routes = useRoutes(isAuth);

  return (
    <AuthContext.Provider value={{
      token, userId, login, logout, isAuth, name
    }}>
      <AppStyled>
      {routes}
      <GlobalStyled />
    </AppStyled>
    </AuthContext.Provider>
  );
}

export default App;

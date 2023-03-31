import React, { FC } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

interface ILayout {
  children: React.ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

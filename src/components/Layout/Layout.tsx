import React, { FC } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface ILayout {
  children: React.ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <div className="mb-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

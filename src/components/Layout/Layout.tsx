import { FC, ReactNode } from "react";
import { Header, Footer } from "@/components";

interface ILayout {
  children: ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <div className="mb-auto">{children}</div>
      <Footer />
    </div>
  );
};

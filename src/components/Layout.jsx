import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main className="main-body">{children}</main>
    </>
  );
};

export default Layout;

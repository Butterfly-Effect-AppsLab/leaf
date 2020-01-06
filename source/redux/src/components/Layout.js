import React from "react";
import "./Layout.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, history }) => {
  return (
    <div>
      <Navbar history={history} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

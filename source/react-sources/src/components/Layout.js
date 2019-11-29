import React from "react";
import "./Layout.css";
import Footer from "./Footer";
import Menu from "./Menu"


const Layout = ({children, history}) => {
    return (
    <div
        style={{ position: "relative", overflow: "auto", overflowX: "hidden" }}
    >
        <Menu history={history} />
        <div
            style={{
              paddingTop: "50px",
              paddingBottom: "50px"
            }}
        >
            {children}
        </div>
        <Footer history={history}  />
    </div>
    )
}

export default Layout;
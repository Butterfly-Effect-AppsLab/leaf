import React from "react";
import "./Layout.css";
import Footer from "./Footer";
import Menu from "./Menu"


const Layout = ({children, history}) => {
    return (
    <div
        id="Hlavny"
        style={{  width: "100%", height: "100%", position: "fixed", overflow: "hidden" }}
    >
        <Menu history={history} />
        <div id="Paddingovy"
            style={{
              paddingTop: "70px",
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
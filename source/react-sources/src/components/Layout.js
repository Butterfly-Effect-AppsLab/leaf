import React from "react";
import Footer from "./Footer";
import Menu from "./Menu"


const Layout = ({children, history}) => {
    return (
    <div
        id="Hlavny"
        style={{  width: "100%", height: "100%", position: "fixed", overflow: "auto" }}
    >
        <Menu history={history} />
        <div id="Paddingovy"
            style={{
                marginTop: "70px",
                marginBottom: "50px"
            }}
        >
            {children}
        </div>
        <Footer history={history}  />
    </div>
    )
}

export default Layout;
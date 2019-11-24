import React from "react";
import "./Layout.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Menu from "./Menu"


const Layout = ({children, history}) => {
    return (
    <div>
        {/*<Navbar history={history} />*/}
        <Menu/>
        {children}
        <Footer />
    </div>
    )
}

export default Layout;
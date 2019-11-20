import React from "react";
import "./Layout.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Menu from "./Menu"
import Hello from "./Hello.js"

const Layout = ({children, history}) => {
    return (
    <div>
        {/*<Navbar history={history} />*/}
        <Menu/>
        <Hello />
        {children}
        <Footer />
    </div>
    )
}

export default Layout;
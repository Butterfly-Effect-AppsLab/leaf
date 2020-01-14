import Footer from "./Footer";
import React from "react";
import FirmaHeader from "./CompanyHeader";



const Layout = ({children, history}) => {
    return (
        <div
            id="Hlavny"
            style={{
                width: "100%",
                height: "100%",
                position: "fixed",
                overflow: "auto",
            }}
        >
            <FirmaHeader history={history}/>
            {children}
            <Footer history={history}/>
        </div>
    )
};

export default Layout;
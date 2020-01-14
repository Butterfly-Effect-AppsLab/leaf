import Footer from "./Footer";
import Menu from "./Menu";
import React from "react";


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
        {/*{*/}
        {/*   history.location.pathname !== '/'  && <Menu history={history}/>*/}
        {/*}*/}
        {/*<div id="Paddingovy"*/}
        {/*    style={{*/}
        {/*        marginTop: "70px",*/}
        {/*        marginBottom: "60px"*/}
        {/*    }}*/}
        {/*>*/}
            {children}
        {/*</div>*/}
        {
            (history.location.pathname !== '/' && history.location.pathname !== '/Onboarding') && <Footer history={history}/>
        }    </div>
    )
};

export default Layout;
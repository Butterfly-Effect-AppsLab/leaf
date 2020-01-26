import Footer from "./Footer";
import React from "react";
import CompanyHeader from "./CompanyHeader";
// import * as ProjectColors from "../utils/colors";
// import Backround_cisty_zubok from "../icons/backround_cisty_zubok.svg";

const Layout = ({children, history}) => {
    return (
        <div
            id="Hlavny"
            style={{
                width: "100%",
                height: '100%',
                position: "fixed",
                overflow: "auto",
                // background: ProjectColors.yellow(),
                // backgroundImage: `url(${Backround_cisty_zubok})`,
            }}
        >
            <CompanyHeader history={history}/>
            {children}
            <Footer history={history}/>
        </div>
    )
};

export default Layout;
import React from "react";
import ProfileCards from "../components/ProfileCards";

const LoginPage = () => {
    return (<div
         style={{
                 background: "#F9FAFB",
                 width: '100%',
                 color: "#7C7C7C",
                 marginBottom: "60px",
             }}
        >
                <div style={{paddingRight: 10, paddingLeft: 10, height: "25vh", textAlign: "center"}}>
                    <b style={{fontSize : "32px"}}>Michaela</b>
                </div>
                <b style={{paddingRight: 10, paddingLeft: 10, color: "#EFCA59" }}>Na čom sa práve učím</b>
                <ProfileCards type="firm"/>
                <b style={{paddingRight: 10, paddingLeft: 10, color: "#E17A47"}}>Moje vlastné projekty</b>
                <ProfileCards type="project"/>
                <b style={{paddingRight: 10, paddingLeft: 10}}>Čo už mám za sebou</b>

    </div>
    )
};

export default LoginPage;
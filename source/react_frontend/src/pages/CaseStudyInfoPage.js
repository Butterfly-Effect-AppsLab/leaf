import React from "react";
import CaseStudyInfo from "../components/CaseStudyInfo";
import Backround_cisty_zubok from "../icons/backround_cisty_zubok.svg";


const CaseStudyInfoPage = () => {
        return (
            <div
                style={{
                    height: '100%',
                    marginTop: '80px',
                    marginBottom: '60px',
                    background: "#EFCA59",
                    backgroundImage: `url(${Backround_cisty_zubok})`,
                }}
            >
                    <CaseStudyInfo/>
                </div>
        )
    };

export default CaseStudyInfoPage;
import React from "react";
import CaseStudyInfo from "../components/CaseStudyInfo";
import Backround_cisty_zubok from "../icons/backround_cisty_zubok.svg";
import * as ProjectColors from "../utils/colors";

const CaseStudyInfoPage = () => {
        return (
            <div
                style={{
                    height: '100%',
                    marginTop: '80px',
                    paddingBottom: '60px',
                    background: ProjectColors.yellow(),
                    backgroundImage: `url(${Backround_cisty_zubok})`,
                }}
            >
                    <CaseStudyInfo/>
                </div>
        )
    };

export default CaseStudyInfoPage;
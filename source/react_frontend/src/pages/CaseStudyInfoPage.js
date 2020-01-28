import React from "react";
import CaseStudyInfo from "../components/CaseStudyInfo";
import Backround_cisty_zubok from "../icons/backround_cisty_zubok.svg";
import * as ProjectColors from "../utils/colors";

const CaseStudyInfoPage = (props) => {
        const {idCase} =  props.location.state;

        return (
            <div
                style={{
                    height: '100%',
                    marginBottom: '80px',
                    // background: ProjectColors.yellow(),
                    // backgroundImage: `url(${Backround_cisty_zubok})`,
                }}
            >
                    <CaseStudyInfo idCase={idCase}/>
                </div>
        )
    };

export default CaseStudyInfoPage;
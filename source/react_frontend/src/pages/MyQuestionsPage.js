import React from "react";
import ProjectQuestionSwipe from "../components/ProjectQuestionSwipe";
import background_projekt_orange from "../icons/background_projekt_orange.svg";
import * as ProjectColors from '../utils/colors';

const MyQuestionsPage = () => {
    return (
        <div style={{
                        height: '100%',
                        marginBottom: '80px',
                        // background: ProjectColors.lightGray(),
                        // backgroundImage: `url(${background_projekt_orange})`,
                        }}
            >
                <ProjectQuestionSwipe/>
            </div>
    )
};

export default MyQuestionsPage;
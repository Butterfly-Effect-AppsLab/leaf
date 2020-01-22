import React from "react";
import ProjectQuestionSwipe from "../components/ProjectQuestionSwipe";
import MyProjectButtons from "../components/MyProjectButtons";
import background_projekt_orange from "../icons/background_projekt_orange.svg";
import * as ProjectColors from '../utils/colors';

const MyQuestionsPage = () => {
    return (
        <div style={{
                        height: '100%',
                        marginTop: '70px',
                        marginBottom: '25px',
                        background: ProjectColors.lightGray(),
                        backgroundImage: `url(${background_projekt_orange})`,
                        }}
            >
                <ProjectQuestionSwipe/>
                <MyProjectButtons/>
            </div>
    )
};

export default MyQuestionsPage;
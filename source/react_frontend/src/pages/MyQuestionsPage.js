import React from "react";
import ProjectQuestionSwipe from "../components/ProjectQuestionSwipe";
import background_projekt_orange from "../icons/background_projekt_orange.svg";
import * as ProjectColors from '../utils/colors';

const MyQuestionsPage = (props) => {
    const {idProject, idStage, name} =  props.location.state;
    console.log('v my question page', props);
    return (
        <div style={{
                        height: 'auto',
                        marginBottom: '80px',
                        // background: ProjectColors.lightGray(),
                        // backgroundImage: `url(${background_projekt_orange})`,
                        }}
            >
                <ProjectQuestionSwipe idProject={idProject} idStage={idStage} name={name}/>
            </div>
    )
};

export default MyQuestionsPage;
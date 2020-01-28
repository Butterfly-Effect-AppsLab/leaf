// import QuestionSwipe from "../components/QuestionSwipe";
import 'swiper/css/swiper.css';
import React from "react";
import backround_cisty_zubok_white from "../icons/backround_cisty_zubok_white.svg";
import * as ProjectColors from "../utils/colors";

const CompanyQuestionsPage = (props) => {
    const {idStage, idCase} =  props.location.state;

    return (<div style={{
            height: 'auto',
            marginBottom: '80px',
            // background: ProjectColors.lightGray(),
            // backgroundImage: `url(${backround_cisty_zubok_white})`,
        }}
        >

        </div>
    )
};

export default CompanyQuestionsPage;
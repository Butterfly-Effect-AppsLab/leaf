import AnswerButtons from "../components/AnswerButtons";
import CompanyLCquestion from "../components/CompanyLCquestion";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import React from "react";
import backround_cisty_zubok_white from "../icons/backround_cisty_zubok_white.svg";

const CompanyQuestionsPage = (answer) => {
    return (<div style={{
                        height: 'auto',
                        marginTop: '70px',
                        marginBottom: '25px',
                        background: "#F9FAFB",
                        backgroundImage: `url(${backround_cisty_zubok_white})`,
                        }}
            >
                <CompanyLCquestion/>
                <AnswerButtons/>
            </div>
    )
};

export default CompanyQuestionsPage;
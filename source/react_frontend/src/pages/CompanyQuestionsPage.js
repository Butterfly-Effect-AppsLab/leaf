
import QuestionSwipe from "../components/QuestionSwipe";
import 'swiper/css/swiper.css';
import React from "react";
import backround_cisty_zubok_white from "../icons/backround_cisty_zubok_white.svg";

const CompanyQuestionsPage = (answer) => {
    return (<div style={{
                        height: '100%',
                        marginTop: '70px',
                        marginBottom: '25px',
                        background: "#F9FAFB",
                        backgroundImage: `url(${backround_cisty_zubok_white})`,
                        }}
            >
                <QuestionSwipe/>
            </div>
    )
};

export default CompanyQuestionsPage;
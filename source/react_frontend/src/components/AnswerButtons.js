import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import React from "react";
import Explanation from './Explanation';
import * as ProjectColors from "../utils/colors";

const useStyles = makeStyles(theme => ({
        typography: {
            width: 'auto',
            textAlign: 'center',
            marginTop: "30px",
            marginBottom: "30px",
            marginRight: "auto",
            marginLeft: "auto",
            overflowX: "auto"
        },
        box: {
            textAlign: 'center',
            marginTop: "30px",
            marginBottom: "60px",
            marginRight: "auto",
            marginLeft: "auto",
            overflowX: "auto",
            backgroundColor: "transparent",
            border: '3px solid ' + ProjectColors.yellow(),
            borderRadius: '6px',
            maxWidth: '80%',
        },
        button: {
            width: "100%",
        }
    }))
;

export default function AnswerButtons(props) {
    const classes = useStyles();
    const {answers, goToNextQuestion} = props;
    const [openExplanation, setOpenExplanation] = React.useState(false);
    const [chosenAnswer, setChosenAnswer] = React.useState({});

    const handleClick = (answer) => {
        setOpenExplanation(true);
        setChosenAnswer(answer);
    };

    const renderExplanation = (answer, openExplanation) => {
        if (openExplanation) {
            return (
                <Explanation explanation={answer.explanation} isCorrect={answer.isCorrect} open={openExplanation}
                             onClose={() => {
                                 setOpenExplanation(false);
                                 if (answer.isCorrect) {
                                     goToNextQuestion()
                                 }
                             }}/>
            )
        }
        return null
    };

    return (
        <>
            {Object.keys(answers).map((answerId) => (
                <div className={classes.box}>
                    <Button className={classes.button} onClick={() => {
                        handleClick(answers[answerId])
                    }}>{answers[answerId].answerText}</Button>
                </div>
            ))}
            {
                renderExplanation(chosenAnswer, openExplanation)
            }
        </>
    )

};

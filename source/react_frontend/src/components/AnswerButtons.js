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
    //const {answers, goToNextQuestion} = props;
    const {choices, goToNextQuestion} = props;
    const [openExplanation, setOpenExplanation] = React.useState(false);
    //const [chosenAnswer, setChosenAnswer] = React.useState({});
    const [choice, setChoice] = React.useState({});

    const handleClick = (choice) => {
        setOpenExplanation(true);
        //setChosenAnswer(answer);
        setChoice(choice);
    };

    const renderExplanation = (choice, openExplanation) => {
        if (openExplanation) {
            return (
                <Explanation explanation={choice.explanation} isCorrect={choice.is_correct} open={openExplanation}
                             onClose={() => {
                                 setOpenExplanation(false);
                                 if (choice.is_correct) {
                                     goToNextQuestion()
                                 }
                             }}/>
            )
        }
        return null
    };

    if(choices) {
        return (
            <>
                {/*Object.keys(answers).map((answerId) => (
                    <div className={classes.box}>
                        <Button className={classes.button} onClick={() => {
                            handleClick(answers[answerId])
                        }}>{answers[answerId].answerText}</Button>
                    </div>
                ))*/}
                {Object.keys(choices).map((idChoice) => (
                    <div className={classes.box}>
                        <Button className={classes.button} onClick={() => {
                            handleClick(choices[idChoice])
                        }}>{choices[idChoice].choice_text}</Button>
                    </div>
                ))}
                {
                    renderExplanation(choice, openExplanation)
                }
            </>
        )
    }
    else {
        return null;
    }

};

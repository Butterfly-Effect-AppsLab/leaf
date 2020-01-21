import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import React from "react";
import Feedback from './Feedback'

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
            border: '3px solid #EFCA59',
            borderRadius: '6px',
            maxWidth: '80%',
        }
    }))
;

export default function AnswerButtons(props) {
    const answers = props.answers;
    const classes = useStyles();
    const [openFeedback, setOpenFeedback] = React.useState(false);

    return (
        answers.map((answer) => (
            <div className={classes.box}>
                <Button onClick={() => {setOpenFeedback(true)}}>{answer.answerText}</Button>
                    <Feedback feedback={answer.feedback} isCorrect={answer.isCorrect} open={openFeedback}
                              onClose={() => {
                                  setOpenFeedback(false)
                              }}/>
            </div>
        ))
    )

};

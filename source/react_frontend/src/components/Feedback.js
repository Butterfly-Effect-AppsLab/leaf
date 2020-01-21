import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    feedback: {
        borderRadius: "21px",
        textAlign: "center",
        marginLeft: "5%",
        marginRight: "5%",
    },
    feedbackHeader: {
        fontSize: "17px",
        marginBottom: "5%",
        marginTop: "5%",
        textAlign: "center",
    },
    feedbackText: {
        marginLeft: "10%",
        marginRight: "10%",
        marginBottom: "10%",
        color: "#7C7C7C",
        fontSize: "14px",
    },
    button: {
        color: "white",
        width: "130px",
        marginBottom: "5%",
    },
});

export default function Feedback(props) {
    const open = props.open;
    const isCorrect = props.isCorrect;
    const feedback = props.feedback;
    const classes = useStyles();
    const color = {incorrect: "#EF3D59", correct: "#46B29D"};

    const setColor = (isCorrect) => {
        if (isCorrect === true) {
            return (color.correct);
        } else return (color.incorrect);
    };

    const fullList = () => (
        <div role="presentation">
            <h1 className={classes.feedbackHeader} style={{color: setColor({isCorrect})}}>Nápoveda</h1>
            <Typography className={classes.feedbackText}>
                {feedback}
            </Typography>
            <Button variant="contained" className={classes.button} style={{background: setColor({isCorrect})}}
                    onClick={() => {
                        props.onClose()
                    }}> {/*volanie az po kliku*/}
                Ok
            </Button>
        </div>
    );


    return (
        <div>
            <Drawer
                anchor="bottom"
                open={open}
                classes={{
                    paper: classes.feedback,
                }}>
                {fullList()}
            </Drawer>
        </div>
    );
}

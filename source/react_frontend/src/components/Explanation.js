import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    explanation: {
        borderRadius: "21px",
        textAlign: "center",
        marginLeft: "5%",
        marginRight: "5%",
    },
    explanationHeader: {
        fontSize: "17px",
        marginBottom: "5%",
        marginTop: "5%",
        textAlign: "center",
    },
    explanationText: {
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

export default function Explanation(props) {
    const open = props.open;
    const isCorrect = props.isCorrect;
    const explanation = props.explanation;
    const classes = useStyles();
    const color = {incorrect: "#EF3D59", correct: "#46B29D"};
    const title = {incorrect: "Nápoveda", correct: "Správne"};


    const setColor = (isCorrect) => {
        if (isCorrect === true) {
            return (color.correct);
        } else return (color.incorrect);
    };
    const setTitle = (isCorrect) => {
        if (isCorrect === true) {
            return (title.correct);
        } else return (title.incorrect);
    };

    const fullList = () => (
        <div role="presentation">
            <h1 className={classes.explanationHeader} style={{color: setColor(isCorrect)}}>{setTitle(isCorrect)}</h1>
            <Typography className={classes.explanationText}>
                {explanation}
            </Typography>
            <Button variant="contained" className={classes.button} style={{background: setColor(isCorrect)}}
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
                    paper: classes.explanation,
                }}>
                {fullList()}
            </Drawer>
        </div>
    );
}

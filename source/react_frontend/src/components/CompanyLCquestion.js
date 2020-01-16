import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    questionBox: {
        paddingTop: '40px',
        paddingBottom: '15px',
        marginRight: 'auto',
        marginLeft: 'auto',
        // maxWidth: '150px',
    },
    question: {
        fontStyle: 'normal',
        color: '#7C7C7C',
        // fontWeight: 'bold',
        // FontSize: '21px',
        textAlign: 'center',
        lineHeight: '27px',
        overflowX: "auto",
    },
}));

export default function CompanyLCquestion() {
    const classes = useStyles();
    return (
        <div className={classes.questionBox}>
            <Typography className={classes.question}>
                Otazka na zakaznika Toothfresh?
            </Typography>
        </div>);
};


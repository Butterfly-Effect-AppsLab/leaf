import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React from "react";

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(0),
        },
    },
    button: {
        minWidth: "85%",
        margin: "15px",
        border: "2px solid #EFCA59",
        borderRadius: '6px',
        textColor: '#7C7C7C',
        textTransform: 'none',
        textAlign: 'center'
    },
}));

export default function AnswerButtons() {
    const classes = useStyles();

    const renderButton = answer => {
        return (
            <Button className={classes.button}>
                {answer}
            </Button>
        );
    };

    const options = ["Každého človeka, ktorý si umýva zuby", "Eco zodpovedných ľudí", "Rodiny"]

    return (
        <div className={classes.root}>
            <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"

            >
                {options.map(option => renderButton(option))}
            </Grid>
        </div>
    );
}
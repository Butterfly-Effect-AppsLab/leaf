import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      },
  },
  button: {
        minWidth: "85%",
        minHeight: "50px",
        margin: theme.spacing(2),
  },
}));

export default function AnswerButton() {
  const classes = useStyles();

  const renderButton = answer => {
    return (
        <Button className={classes.button} variant="outlined" color="primary">
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
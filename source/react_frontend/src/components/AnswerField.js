import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from "react";

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      //Co je toto???
      //Jak to, ze to mam pekne zarovnane na stred?
      margin: theme.spacing(1),
      width: "75%",
    },
    field: {
      multiline: true,
      rows: 15,
      id: "outlined-basic",
      label: "Odpoveď",
      variant: "outlined",
    }
    //Preco to takto nefunguje?
  },
}));

export default function AnswerField() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField multiline="true" rows="10" id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  );
}
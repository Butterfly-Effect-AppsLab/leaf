import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const questions = [
  "Kto bude tvoj zákazník, teda ten, ktorý bude schopný a ochotný za produkt zaplatiť?"
];

const useStyles = makeStyles(theme => ({
  questionBox: {
    paddingTop: "80px",
    paddingBottom: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: "80%"
  },
  question: {
    color: "#7C7C7C",
    fontWeight: "bold",
    FontSize: "21px",
    textAlign: "center",
    lineHeight: "27px",
    overflowX: "auto"
  }
}));

export default function ProjectLCquestion() {
  const classes = useStyles();

  return (
    <div className={classes.questionBox}>
      <Typography className={classes.question}>
          Kto bude tvoj zákazník, teda ten, ktorý bude schopný a ochotný za produkt zaplatiť?
      </Typography>
    </div>
  );
}
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as ProjectColors from "../utils/colors";

const useStyles = makeStyles(theme => ({
  questionBox: {
    paddingTop: "80px",
    paddingBottom: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: "80%"
  },
  question: {
    color: ProjectColors.darkGray(),
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
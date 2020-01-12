import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


//import {headlines} from './Card';

const useStyles = makeStyles(theme => ({
  spat: {
    textAlign: "center",
  },
  appBar: {
    position: 'fixed',
    maxHeight: '80px',
    top: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderRadius: '0%',
  },
  head: {
    width: '100%',
    padding: '10px',
    marginTop: '30px',
    textAlign: "center",
    marginleft: '15px',
    marginRight: '15px',
    marginBottom: '30px',
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar color='secondary' className={classes.appBar}>
        <Toolbar>
          <div>
            <IconButton edge="start" className={classes.title}>
              <ArrowBackIosIcon />
              <Typography className={classes.card}>
              Späť
              </Typography>
            </IconButton>
          </div>
          <div className={classes.head} >
            <Typography className={classes.title} variant="h6">
              Čistý zúbok
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
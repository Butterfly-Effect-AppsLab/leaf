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
    paddingLeft: '0px',
    paddingRight: '0px',
    paddingTop: '0px',
    paddingBottom: '0px',
    top: 0,
  },
  but: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    borderRadius: '0%',
    position: 'absolute',
    left: 0 ,
    top: 0,
    paddingBottom: '15px',
    paddingLeft: '10px',
  },
  title: {
    width: '100%',
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    borderRadius: '0%',
    textAlign: 'center',
    position: 'absolute',
    paddingBottom: '15px',
  },
  head: {
    width: '100%',
    padding: '10px',
    marginTop: '30px',
    textAlign: "center",
    marginleft: '15px',
    marginRight: '15px',
    marginBottom: '30px',
    display: 'inline-block',
    height: '30px',
    position: 'relative'
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar color='secondary' className={classes.appBar}>
        <Toolbar>
          <div className={classes.head} >
             <div className={classes.but} >
              <IconButton className={classes.but} >
                <ArrowBackIosIcon />
                <Typography className={classes.card}>
                  Späť
                </Typography>
              </IconButton>
              </div>
              <div className={classes.title} >
                <Typography  variant="h6">
                  Čistý zúbok
                </Typography>
              </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
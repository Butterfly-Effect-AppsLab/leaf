import React from "react";
// import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1), //zvacsovanie okolia tlacitka
  },
}));

const Navbar = ({history}) => {
  const classes = useStyles();

    return (<div style=
        {{backgroundColor:"#ff0000", padding:"50px", color:"#ffffff", fontSize: "50px"}}>
            {/*<Button  */}
            {/*variant="contained" */}
            {/*color="primary" */}
            {/*className={classes.button} */}
            {/*onClick={() => {*/}
            {/*  //console.log("hello");*/}
            {/*  history.push("/");*/}
            {/*  }} >*/}
            {/*  Home*/}
            {/*</Button>*/}

            {/*<Button  */}
            {/*variant="contained" */}
            {/*color="primary" */}
            {/*className={classes.button} */}
            {/*onClick={() => {*/}
            {/*  //console.log("hello");*/}
            {/*  history.push("/settings");*/}
            {/*  }} >*/}
            {/*  Settings*/}
            {/*</Button>*/}
            
            {/* <Link to="/" style={{margin:"15px",color:"#ffffff"}}>
              Home
            </Link> */}
            {/* <Link to="/settings" style={{margin:"15px",color:"#ffffff"}}>
              Settings
            </Link>  */}
    </div>)
}

export default Navbar;
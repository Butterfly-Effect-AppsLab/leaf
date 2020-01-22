import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

const Navbar = ({ history }) => {
  const classes = useStyles();

  return (
    <div
      style={{
        backgroundColor: "#ff0000",
        padding: "20px",
        color: "#ffffff",
        fontSize: "30px"
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          history.push("/");
        }}
        className={classes.button}
      >
        HOME
      </Button>

      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          history.push("/settings");
        }}
        className={classes.button}
      >
        SETTINGS
      </Button>

      {/* <Link to="/" style={{ margin: "15px", color: "#ffffff" }}>
        HOME
      </Link>
      <Link to="/settings" style={{ margin: "15px", color: "#ffffff" }}>
        SETTINGS
      </Link> */}
    </div>
  );
};

export default Navbar;

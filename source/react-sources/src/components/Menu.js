import React, { useEffect } from "react";
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import history from "../utils/history";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1001,
  },
  toolbar: {
    height: "50px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar = ({history}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [title, setTitle] = React.useState("Dashboard");
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    const processPathName = pathname => {
      switch (pathname) {
        case "/":
          setTitle("Dashboard");
          break;
        case "/Settings":
          setTitle("Settings");
          break;
        case "/Firmy":
          setTitle("Zoznam Firiem");
          break;
        default:
          break;
      }
    };

    if (history) {
      processPathName(history.location.pathname);
      history.listen((location, action) => {
        processPathName(location.pathname);
      });
    }
  }, [history]);

  return (
    <div name="menu" className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
              id="menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
          >
            <MenuItem component={Link} to="/" onClick={handleClose}>Home</MenuItem>
            <MenuItem component={Link} to="/Settings" onClick={handleClose}>Settings</MenuItem>
            <MenuItem component={Link} to="/Firmy" onClick={handleClose}>Zoznam Firiem</MenuItem>
          </Menu>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ButtonAppBar;
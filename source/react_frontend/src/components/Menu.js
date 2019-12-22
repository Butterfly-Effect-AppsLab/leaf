import React, {useEffect} from "react";
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';

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
          setTitle("Login");
          break;
        case "/Otazky":
          setTitle("Môj projekt");
          break;
        case "/Firmy":
          setTitle("Zoznam firiem");
          break;
        case "/LCFirma":
          setTitle("Otázky k firmám");
          break;
        case "/LcKategorie":
          setTitle("Lean Canvas kategórie");
          break;
        case "/ProjectInfo":
          setTitle("Infomacie o projekte");
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
    <div id="menu" className={classes.root}>
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
            <MenuItem component={Link} to="/Otazky" onClick={handleClose}>Môj projekt</MenuItem>
            <MenuItem component={Link} to="/Firmy" onClick={handleClose}>Zoznam firiem</MenuItem>
            <MenuItem component={Link} to="/LCFirma" onClick={handleClose}>Otázky k firmám</MenuItem>
            <MenuItem component={Link} to="/LcKategorie" onClick={handleClose}>Lean Canvas kategórie</MenuItem>
            <MenuItem component={Link} to="/ProjectInfo" onClick={handleClose}>Informacie o projekte</MenuItem>
          </Menu>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Button color="inherit" component={Link} to="/" onClick={handleClose}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ButtonAppBar;
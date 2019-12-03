import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    height: "50px",
  },
  icon: {
    color: "#64b5f6",
  }
});

const Footer = ({ history }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    const processPathName = pathname => {
      switch (pathname) {
        case "/Login":
          setValue(0);
          break;
        case "/Otazky":
          setValue(1);
          break;
        case "/Firmy":
          setValue(2);
          break;
        default:
          break;
      }
    };

    if (history) {
      processPathName(history.location.pathname);
      console.log(history.location.pathname);
      history.listen((location, action) => {
      console.log(history.location.pathname);
      });
    }
  }, [history]);

  return (
      <BottomNavigation
        value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        switch (newValue) {
          case 0:
            history.push("/Login");
            break;
          case 1:
            history.push("/Otazky");
            break;
          case 2:
            history.push("/Firmy");
            break;
          default:
            break;
        }
      }}
      showLabels
        className={classes.root}
      >
        <BottomNavigationAction className={classes.icon} label="Login" icon={<RestoreIcon />} />
        <BottomNavigationAction className={classes.icon} label="Otázky" icon={<FavoriteIcon />} />
        <BottomNavigationAction className={classes.icon} label="Zoznam Firiem" icon={<LocationOnIcon />} />
      </BottomNavigation>
  );
};

export default Footer;
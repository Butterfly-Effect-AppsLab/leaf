import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    height: "60px",
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
        case "/Otazky":
          setValue(0);
          break;
        case "/Firmy":
          setValue(1);
          break;
        case "/LCFirma":
          setValue(2);
          break;
        case "/LcKategorie":
         setValue(3);
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
      <BottomNavigation
        value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        switch (newValue) {
          case 0:
            history.push("/Otazky");
            break;
          case 1:
            history.push("/Firmy");
            break;
          case 2:
            history.push("/LCFirma");
            break;
          case 3:
            history.push("/LcKategorie");
            break;
          default:
            break;
        }
      }}
      showLabels
        className={classes.root}
      >
        <BottomNavigationAction className={classes.icon} label="Môj projekt" icon={<FavoriteIcon />} />
        <BottomNavigationAction className={classes.icon} label="Zoznam firiem" icon={<LocationOnIcon />} />
        <BottomNavigationAction className={classes.icon} label="Otázky k firmám" icon={<QuestionAnswerIcon />} />
        <BottomNavigationAction className={classes.icon} label="Lean Canvas kategórie" icon={<RestoreIcon />} />
      </BottomNavigation>
  );
};

export default Footer;
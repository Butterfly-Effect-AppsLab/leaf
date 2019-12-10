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
        case "/":
          setValue(0);
          break;
        case "/Otazky":
          setValue(1);
          break;
        case "/Firmy":
          setValue(2);
          break;
        case "/LCFirma":
          setValue(3);
          break;
        //case "/LcKategorie":
        //  setValue(4);
        //  break;
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
            history.push("/");
            break;
          case 1:
            history.push("/Otazky");
            break;
          case 2:
            history.push("/Firmy");
            break;
          case 3:
            history.push("/LCFirma");
            break;
          //case 4:
          //  history.push("/LcKategorie");
          //  break;
          // <BottomNavigationAction className={classes.icon} label="Lean Canvas kategorie" icon={<QuestionAnswerIcon />} />
          default:
            break;
        }
      }}
      showLabels
        className={classes.root}
      >
        <BottomNavigationAction className={classes.icon} label="Login" icon={<RestoreIcon />} />
        <BottomNavigationAction className={classes.icon} label="Otázky" icon={<FavoriteIcon />} />
        <BottomNavigationAction className={classes.icon} label="Zoznam firiem" icon={<LocationOnIcon />} />
        <BottomNavigationAction className={classes.icon} label="Otázky k firmám" icon={<QuestionAnswerIcon />} />
      </BottomNavigation>
  );
};

export default Footer;
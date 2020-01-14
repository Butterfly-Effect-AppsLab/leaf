import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {ReactComponent as Home} from '../icons/home.svg';
import {ReactComponent as User} from '../icons/user.svg';

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        height: "60px",
    },
    icon: {
        color: "#7C7C7C",
    }
});

const Footer = ({history}) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        const processPathName = pathname => {
            switch (pathname) {
                case "/":
                    setValue(-1);
                    break;
                case "/Firmy":
                    setValue(0);
                    break;
                case "/Profil":
                    setValue(1);
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

    return value >= 0 ? (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
                switch (newValue) {
                    case 0:
                        history.push("/Firmy");
                        break;
                    case 1:
                        history.push("/Profil");
                        break;
                    default:
                        break;
                }
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction className={classes.icon} icon={<Home/>}/>
            <BottomNavigationAction className={classes.icon} icon={<User/>}/>

        </BottomNavigation>
    ) : null;
};

export default Footer;
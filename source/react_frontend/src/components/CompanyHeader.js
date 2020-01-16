import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import history from '../utils/history';

//import {headlines} from './Card';

const useStyles = makeStyles(theme => ({
    spat: {
        display: "inline-block",
        overflowX: "auto",
        margin: 5,
        fontSize: 20,
        fontWeight: "bold",
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
    toolBar: {
        padding: '0px'
    },
    but: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        borderRadius: '0%',
        position: 'absolute',
        left: 0,
        top: 0,
        paddingTop: '5px',
        paddingBottom: '15px',
        paddingLeft: '18px',
    },
    title: {
        width: '100%',
        fontSize: 20,
        fontWeight: "bold",
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

/**
 * @return {null}
 */
function DenseAppBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(-1);
    const [textColor, setTextColor] = React.useState("");
    const [headerColor, setHeaderColor] = React.useState("")


    useEffect(() => {
        const processPathName = pathname => {
            switch (pathname) {
                case "/LcKategorie":   //Firma LC
                    setValue(0);
                    setHeaderColor("secondary");
                    setTextColor("#FFFFFF");
                    break;
                case "/ProjectInfo":    //Projekt vyplnanie
                    setValue(1);
                    setHeaderColor("primary");
                    setTextColor("#FFFFFF");
                    break;
                case "/ProjektLcKategorie": //Projekt LC
                    setValue(2);
                    setHeaderColor("primary");
                    setTextColor("#FFFFFF");
                    break;
                case "/LCFirma":        //Firma Otazky
                    setValue(3);
                    setHeaderColor("default");
                    setTextColor("#EFCA59");
                    break;
                case "/Otazky":         //Projekt Otazky
                    setValue(4);
                    setHeaderColor("default");
                    setTextColor("#E17A47");
                    break;
                default:
                    setValue(-1);
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
        <div>
            <AppBar color={headerColor} className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    <div className={classes.head}>
                        <div className={classes.but} style={{color: textColor}}>
                            <IconButton className={classes.but} style={{color: textColor}}>
                                <ArrowBackIosIcon/>
                                <Typography className={classes.spat}>
                                    Späť
                                </Typography>
                            </IconButton>
                        </div>
                        <div>
                            <Typography className={classes.title} style={{color: textColor}}>
                                Čistý zúbok
                            </Typography>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    ) : null;
};

export default DenseAppBar;
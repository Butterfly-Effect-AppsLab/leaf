import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import history from '../utils/history';
import InfoIcon from '@material-ui/icons/Info';
import Drawer from '@material-ui/core/Drawer';
import Button from "@material-ui/core/Button";
import Hint from '../components/Hint';


//import {headlines} from './Card';

const useStyles = makeStyles(theme => ({
    spat: {
        display: "inline-block",
        overflowX: "auto",
        margin: 5,
        fontSize: 17,
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
        boxShadow: 'none'
    },
    toolBar: {
        padding: '0px'
    },
    but: {
        textAlign: "center",
        fontWeight: "bold",
        position: 'absolute',
        left: 0,
        top: 0,
    },
    title: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 23,
        fontWeight: "bold",
        borderRadius: '0%',
        textAlign: 'center',
        paddingBottom: '15px',
    },
    head: {
        width: '100%',
        padding: '10px',
        marginTop: '30px',
        textAlign: "center",
        marginLeft: '15px',
        marginRight: '15px',
        marginBottom: '30px',
        display: 'inline-block',
        height: '30px',
        position: 'relative'
    },
    info: {
        position: 'absolute',
        right: 0,
        top: 0,
        paddingTop: '18px',
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));

/**
 * @return {null}
 */
function DenseAppBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(-1);
    const [textColor, setTextColor] = React.useState("");
    const [headerColor, setHeaderColor] = React.useState("");
    const [showHint, setShowHint] = React.useState(false);
    const [openHint, setOpenHint] = React.useState(false);


    const handleClick = () => {
        setOpenHint(true);
        console.log(openHint);
    };

    useEffect(() => {
        const processPathName = pathname => {
            switch (pathname) {
                case "/LcKategorie":   //Firma LC
                    setValue(0);
                    setHeaderColor("#EFCA59");
                    setTextColor("#FFFFFF");
                    break;
                case "/ProjectInfo":    //Projekt vyplnanie
                    setValue(1);
                    setHeaderColor('#E17A47');
                    setTextColor("#FFFFFF");
                    break;
                case "/ProjektLcKategorie": //Projekt LC
                    setValue(2);
                    setHeaderColor('#E17A47');
                    setTextColor("#FFFFFF");
                    break;
                case "/LCFirma":        //Firma Otazky
                    setValue(3);
                    setHeaderColor('#F9FAFB');
                    setTextColor("#EFCA59");
                    break;
                case "/Otazky":         //Projekt Otazky
                    setValue(4);
                    setHeaderColor('#F9FAFB');
                    setTextColor("#E17A47");
                    setShowHint(true);
                    break;
                case "/ToDo":
                    setValue(5);  //Projek Tuducka
                    setHeaderColor('#F9FAFB');
                    setTextColor("#E17A47");
                    setShowHint(true);
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
    });


    return value >= 0 ? (
        <div>
            <AppBar className={classes.appBar} style={{backgroundColor: headerColor}}>
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
                        {showHint === true ? (
                            <div className={classes.info} style={{color: textColor}}>
                                <IconButton onClick={handleClick} className={classes.info}
                                            style={{color: textColor}}>
                                    <InfoIcon/>
                                </IconButton>
                            </div>
                        ) : null}
                    </div>
                </Toolbar>
            </AppBar>
            <Hint open={openHint} onClose={()=>{setOpenHint(false)}} />
        </div>
    ) : null;
}

export default DenseAppBar;
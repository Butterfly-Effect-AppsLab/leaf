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
import {white, lightGray, orange} from '../utils/colors';
import * as ProjectColors from '../utils/colors';

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
function DenseAppBar(props) {
    const classes = useStyles();
    const [openHint, setOpenHint] = React.useState(false);
    const {showHeader, textColor, headerColor, showHint} = props;

    const handleClick = () => {
        setOpenHint(true);
        console.log(openHint);
    };

    return showHeader >= 0 ? (
        <div>
            <AppBar className={classes.appBar} style={{backgroundColor: headerColor}}>
                <Toolbar className={classes.toolBar}>
                    <div className={classes.head}>
                        <div className={classes.but} style={{color: textColor}}>
                            <IconButton className={classes.but} style={{color: textColor}}>
                                <ArrowBackIosIcon/>
                                <Typography className={classes.spat} onClick={() => {history.goBack()}}>
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
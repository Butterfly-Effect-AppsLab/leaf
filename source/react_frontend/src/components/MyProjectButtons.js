import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import React from "react";

const useStyles = makeStyles(theme => ({
        box: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '30px',
            marginTop: '15%',
        },
        button: {
            textTransform: 'none',
            marginRight: '10px',
            marginLeft: '10px',
            paddingLeft: '9%',
            paddingRight: '9%',
            paddingTop: '4px',
            paddingBottom: '4px',
            color: '#FFFFFF',
            backgroundColor: '#E17A47'
        }
    }))
;

export default function MyProjectButtons() {
    const classes = useStyles();
    return (
        <div className={classes.box}>
            <Button className={classes.button}>uložiť</Button>
            <Button className={classes.button}>ďalej</Button>
        </div>
    );
}

import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import React from "react";

const useStyles = makeStyles(theme => ({
        box: {
           display:  'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '10%'
        },
        button:{
            marginRight: '10px',
            marginLeft: '10px',
            paddingLeft: '7%',
            paddingRight: '7%',
            color: '#FFFFFF',
            backgroundColor: '#E17A47'
        }
    }))
;

export default function MyProjectButtons() {
    const classes = useStyles();
    return (
        <div className={classes.box}>
            <Button className={classes.button}>Uložiť</Button>
            <Button className={classes.button}>Ďalej</Button>
        </div>
    );
}

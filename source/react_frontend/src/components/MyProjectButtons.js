import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import React from "react";
import * as ProjectColors from "../utils/colors";


const useStyles = makeStyles(theme => ({
        box: {
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '10%',
            marginRight: 'auto',
            marginLeft: 'auto',
        },
        button: {
            textTransform: 'no',
            marginRight: '10px',
            marginLeft: '10px',
            paddingLeft: '7%',
            paddingRight: '7%',
            color: ProjectColors.white(),
            backgroundColor: ProjectColors.orange()
        }
    }))
;

export default function MyProjectButtons() {
    const classes = useStyles();
    return (
        <div className={classes.box}>
            <div>
                <Button className={classes.button}>Uložiť</Button>
                <Button className={classes.button}>Ďalej</Button>
            </div>
        </div>
    );
}

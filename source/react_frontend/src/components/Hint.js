import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import * as ProjectColors from "../utils/colors";


const useStyles = makeStyles({
    hint: {
        borderRadius: "21px",
        textAlign: "center",
        marginLeft: "5%",
        marginRight: "5%",
    },
    hintHeader: {
        fontSize: "17px",
        color: ProjectColors.green(),
        marginBottom: "5%",
        marginTop: "5%",
        textAlign: "center",
    },
    hintText: {
        marginLeft: "10%",
        marginRight: "10%",
        marginBottom: "10%",
        color: ProjectColors.darkGray(),
        fontSize: "14px",
    },
    button: {
        background: ProjectColors.green(),
        color: ProjectColors.white(),
        width: "130px",
        marginBottom: "5%",
    },
});

export default function Hint(props) {
    const {open} = props;
    // console.log(side);
    // console.log(value);
    const classes = useStyles();

    const fullList = () => (
        <div
             role="presentation"
        >
            <h1 className={classes.hintHeader}>Nápoveda</h1>
            <Typography className={classes.hintText}>
                Medzi zákazníkom a používateľom je rozdiel. Zákazník je ten, ktorý za produkt platí, používateľ ho
                pouzí, no nemusí zaň nutne platiť. Vytvoriť produkt, službu, design či marketing pre veľmi širokú
                skupinu zákazníkov je nemožné. Zamysli sa preto nad tým, pre koho chceš produkt skutočne tvoriť. Vopred
                si treba zadefinovať prvých zákazníkov, ktorí produkt otestujú. Rôzne skupiny zákazníkov budú vyžadovať
                rôzne vlastnosti produktu, marketing, nákupu. Uvedom si, pre ktorý typ zákazníka chceš produkt vytvárať.
            </Typography>
            <Button variant="contained" className={classes.button} onClick={() => {
                props.onClose()
            }}> {/*volanie az po kliku*/}
                Ok
            </Button>
        </div>
    );
    return (
        <div>
            <Drawer
                anchor="bottom"
                open={open}
                classes={{
                    paper: classes.hint,
                }}>
                {fullList()}
            </Drawer>
        </div>
    );
}

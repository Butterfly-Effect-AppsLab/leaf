import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import * as ProjectColors from "../utils/colors";

const useStyles = makeStyles({
    button: {
        fontSize: 16,
        color: 'white',
        textTransform: 'none',
        fontWeight: 500,
        backgroundColor: ProjectColors.green(),
        borderRadius: '6px',
        paddingLeft: '3.2%',
        paddingRight: '3.2%',
        margin: '40px auto 25px auto',
        display: 'block'
    },
    card: {
        maxWidth: '80%',
        height: '100%',
        padding: "10px",
        textAlign: 'left',
        marginTop: "30px",
        marginBottom: "30px",        marginRight: "auto",
        marginLeft: "auto",
        color: ProjectColors.white(),
        overflowX: "auto",
        backgroundColor: "transparent"
    },
    content: {
        fontSize: '16px',
        lineHeight: '19px',
        letterSpacing: '0.2px',
        marginBottom: '10px'
    },
});

const CaseStudyInfo = () => {
    const classes = useStyles();
    return (
        <div className={classes.card}>
            <Typography className={classes.content}>
                <b>Počet zamestnancov : </b> 6
            </Typography>
            <Typography className={classes.content}>
                <b>Tržby : </b>100 000 €
            </Typography>
            <Typography className={classes.content}>
                <b>Produkt : </b><br/>
                Dizajnové ekologické zubné kefky s dovozom priamo
                domov ešte predtým než je stará kefka už nepoužiteľná.
            </Typography >
            <Typography className={classes.content}> <b>Prečo vznikol :</b><br/>
                Až 80% ľudí si pravidelne zabúda včas vymieňať zubné kefky. Firma Čistý zúbok vznikla v roku 2017 so
                snahou vyriešiť tento problém. Pomáha rodičom a ľuďom,
                ktorý žijú uponáhľaný život a často zabúdajú vymeniť včas zubnú kefku sebe či deťom.
            </Typography>
            <Typography className={classes.content}>
                <b>Čím je výnimočný : </b><br/>
                Čistý zúbok prináša možnosť predplatiť si službu pravidelného dodania prémiovej ekologickej
                zubnej kefky priamo až do domu formou predplatného na dvojmesačnej alebo štvrťročnej báze.
            </Typography>
            <Button className={classes.button}>
                Rozbehni tento biznis
            </Button>
        </div>
    )
};

export default CaseStudyInfo;
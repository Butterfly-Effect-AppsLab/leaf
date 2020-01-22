import Card from "../components/Card";
import AddProject from "../components/AddProject";
import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core";
import * as ProjectColors from "../utils/colors";


const useStyles = makeStyles(theme => ({
        root: {
            background: ProjectColors.lightGray(),
            width: '100%',
            marginBottom: "60px",
            color: ProjectColors.darkGray(),
            height: "auto",
        },
        texts: {
            paddingRight: 10,
            paddingLeft: 10,
        },
        header: {
            paddingTop: 20,
            paddingRight: 10,
            paddingLeft: 10,
            margin: 0
        }
    }))
;

const FirmsPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1 className={classes.header}>Domov</h1>
            <br/>
            <b className={classes.texts}>Vyber si firmu</b>
            <Typography className={classes.texts}>Nauč sa na jednej z firiem, ako správne vytvoriť
                biznis plán a zisti, čo je dôležité pri začiatkoch biznisu</Typography>
            <Card/>
            <br/>
            <b className={classes.texts}>Moje projekty</b>
            <Typography className={classes.texts}>Rozvíjaj svoje vlastné nápady a projekt</Typography>
            <AddProject/>
        </div>)
};

export default FirmsPage;
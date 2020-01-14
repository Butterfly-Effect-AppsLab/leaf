import React from "react";
import ProfileCards from "../components/ProfileCards";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
        root: {
            background: "#F9FAFB",
            width: '100%',
            color: "#7C7C7C",
            marginBottom: "60px",
        },
        profile: {
            paddingRight: 10,
            paddingLeft: 10,
            height: "20vh",
            textAlign: "center"

        },
        texts: {
            paddingRight: 10,
            paddingLeft: 10,
        },
    }));


const LoginPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.profile}>
                <b style={{fontSize: "32px"}}>Michaela</b>
            </div>
            <b className={classes.texts} style={{color: "#EFCA59"}}>Na čom sa práve učím</b>
            <ProfileCards type="firm" color="#EFCA59"/>
            <b className={classes.texts} style={{color: "#E17A47"}}>Moje vlastné projekty</b>
            <ProfileCards type="project" color="#E17A47"/>
            <b className={classes.texts}>Čo už mám za sebou</b>

        </div>
    )
};

export default LoginPage;
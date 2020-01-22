import React from "react";
import ProfileCards from "../components/ProfileCards";
import {makeStyles} from "@material-ui/core";
import * as ProjectColors from "../utils/colors";

const useStyles = makeStyles(theme => ({
        root: {
            background: ProjectColors.lightGray(),
            width: '100%',
            color: ProjectColors.darkGray(),
            marginBottom: "60px",
            height: "100%",
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
            <b className={classes.texts} style={{color: ProjectColors.yellow()}}>Na čom sa práve učím</b>
            <ProfileCards type="firm" color={ProjectColors.yellow()}/>
            <b className={classes.texts} style={{color: ProjectColors.orange()}}>Moje vlastné projekty</b>
            <ProfileCards type="project" color={ProjectColors.orange()}/>
            <b className={classes.texts}>Čo už mám za sebou</b>

        </div>
    )
};

export default LoginPage;
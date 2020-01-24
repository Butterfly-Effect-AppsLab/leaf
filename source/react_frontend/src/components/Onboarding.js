import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import {makeStyles} from "@material-ui/core";
import OnboardingPic from '../icons/onboarding.svg';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import * as ProjectColors from "../utils/colors";


const useStyles = makeStyles({
    root: {
        height: "100vh",
        background: 'linear-gradient(207.11deg, ' + ProjectColors.yellow() + ' 0%,' + ProjectColors.orange() + ' 98%);',
        fontFamily: "\"Sarabun\", sans-serif",
    },
    image: {
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "300%",
        backgroundImage: `url(${OnboardingPic})`,
    },
    title: {
        fontSize: "32px",
        color: ProjectColors.white(),
        textAlign: "center",
        position: "absolute",
        top: "25%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%"
    },
    button: {
        background: ProjectColors.white(),
        position: "absolute",
        bottom: "10%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    skip: {
        color: ProjectColors.white(),
        position: "absolute",
        bottom: "5%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 3,
    },
    swipe: {
        height: "100vh"
    }
});

function Onboarding() {
    const classes = useStyles();
    const params = {
        pagination: {
            el: '.swiper-pagination',
            renderBullet: () => {
                return '<span class="swiper-pagination-bullet swiper-pagination-bullet-active" style="background-color: #ffffff; border-radius: 50%; width: 10px; height: 10px; display: inline-block; margin: 5px;"></span>';
            }
        },
    };
    return (
        <div className={classes.root}>
            <Swiper {...params}>
                <div className={classes.swipe}>
                    <Typography className={classes.title}>
                        Chceš si rozbehnúť vlastný biznis?
                    </Typography>
                    <div className={classes.image} style={{backgroundPosition: "left bottom"}}/>
                </div>
                <div className={classes.swipe}>
                    <Typography className={classes.title}>
                        Poď na to krok za krokom. Growie ťa naučí ako začať.
                    </Typography>
                    <div className={classes.image} style={{backgroundPosition: "center bottom"}}/>
                </div>
                <div className={classes.swipe}>
                    <Typography className={classes.title}>
                        A potom ti pomôže naštartovať aj tvoj vlastný projekt.
                    </Typography>
                    <Button component={Link} to="/" className={classes.button} variant="outlined" color="primary">
                        Poď do toho!
                    </Button>
                    <div className={classes.image} style={{backgroundPosition: "right bottom"}}/>
                </div>
            </Swiper>
            <Button component={Link} to="/" className={classes.skip}>Preskočiť</Button>
        </div>
    )
}

export default Onboarding;
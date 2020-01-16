import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import {makeStyles} from "@material-ui/core";
import OnboardingPic from '../icons/onboarding.svg';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";


const useStyles = makeStyles({
    root: {
        height: "100vh",
        background: 'linear-gradient(207.11deg, #EFCA59 0%, #E17A47 98%);',
        fontFamily: "\"Sarabun\", sans-serif",
    },
    image: {
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "300%",
        // backgroundImage: `url(${OnboardingPic})`,
    },
    title: {
        fontSize: "32px",
        color: "white",
        textAlign: "center",
        position: "absolute",
        top: "25%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%"
    },
    button: {
        background: "white",
        position: "absolute",
        bottom: "10%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    skip: {
        color: "white",
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
        },
    };
    return (
        <div className={classes.root}>
            <Swiper {...params}>
                <div className={classes.swipe}>
                    <Typography className={classes.title}>
                        Chceš si rozbehnúť vlastný biznis?
                    </Typography>
                    <div className={classes.image} style={{backgroundImage: `url(${OnboardingPic})`, backgroundPosition: "left bottom"}}/>
                </div>
                <div className={classes.swipe}>
                    <Typography className={classes.title}>
                        Poď na to krok za krokom. Growie ťa naučí ako začať.
                    </Typography>
                    <div className={classes.image} style={{backgroundImage: `url(${OnboardingPic})`, backgroundPosition: "center bottom"}}/>
                </div>
                <div className={classes.swipe}>
                    <Typography className={classes.title}>
                        A potom ti pomôže naštartovať aj tvoj vlastný projekt.
                    </Typography>
                    <Button component={Link} to="/" className={classes.button} variant="outlined" color="primary">
                        Poď do toho!
                    </Button>
                    <div className={classes.image} style={{backgroundImage: `url(${OnboardingPic})`,backgroundPosition: "right bottom"}}/>
                </div>
            </Swiper>
            <Button component={Link} to="/" className={classes.skip}>Preskočiť</Button>
        </div>
    )
}

export default Onboarding;
import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import {makeStyles} from "@material-ui/core";
import OnboardingOne from '../icons/onboarding1.svg';
import OnboardingTwo from '../icons/onboarding2.svg';
import OnboardingThree from '../icons/onboarding3.svg';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";


const useStyles = makeStyles({
    color: {
        height: "100vh",
        background: 'linear-gradient(207.11deg, #EFCA59 0%, #E17A47 98%);',

    },
    image: {
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left bottom",
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

});

function Onboarding() {
    const classes = useStyles();
    const params = {
        pagination: {
            el: '.swiper-pagination',
        },
};
return (
    <div className={classes.color}>
        <Swiper {...params}>
            <div>
                <Typography className={classes.title}>
                    Chceš si rozbehnúť vlastný biznis?
                </Typography>
                <div className={classes.image} style={{backgroundImage: `url(${OnboardingOne})`}}/>
            </div>
            <div>
                <Typography className={classes.title}>
                    Poď na to krok za krokom. Growie ťa naučí ako začať.
                </Typography>
                <div className={classes.image} style={{backgroundImage: `url(${OnboardingTwo})`}}/>
            </div>
            <div>
                <Typography className={classes.title}>
                    A potom ti pomôže naštartovať aj tvoj vlastný projekt.
                </Typography>
                <Button component={Link} to="/" className={classes.button} variant="outlined" color="primary">
                    Poď do toho!
                </Button>
                <div className={classes.image} style={{backgroundImage: `url(${OnboardingThree})`}}/>
            </div>
        </Swiper>
    </div>
)
}
export default Onboarding;
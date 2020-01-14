import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Barbershop from '../icons/barbershop.svg';
import Zubok from '../icons/zubok.svg';
import Coffee from '../icons/coffee.svg';
import CardActionArea from "@material-ui/core/CardActionArea";


const useStyles = makeStyles({
    card: {
        width: 170,
        height: 170,
        display: "inline-block",
        overflowX: "auto",
        margin: 5,

    },
    title: {
        fontSize: 20,
        margin: 0,
        fontWeight: "bold",
        color: "white",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        whiteSpace: "normal",
        textAlign: "center",
        minWidth: "130px",
    },
    content: {
        width: 170,
        height: 170,
        background: "#EFCA59",
        backgroundRepeat: "no-repeat",
        backgroundSize: "170px 170px",
        backgroundPosition: "left center",
        position: "relative",
        padding: 0,
    },
});

export default function SimpleCard() {
    const classes = useStyles();

    const renderCard = (title, logo) => {
        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardContent className={classes.content} style={{backgroundImage: `url(${logo})`}}>
                        <Typography
                            className={classes.title}
                        >
                            {title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    };


    const studies = [
        {headline: "Schollar barbershop", icon: "Barbershop"},
        {headline: "Čistý zúbok", icon: "Zubok"},
        {headline: "Honest coffee", icon: "Coffee"}
    ];

    return (
        <div
            style={{
                overflowX: "auto",
                overflowY: "hidden",
                whiteSpace: "nowrap",
            }}
        >
            {studies.map((study) => renderCard(study.headline, study.icon))}
        </div>
    );
}

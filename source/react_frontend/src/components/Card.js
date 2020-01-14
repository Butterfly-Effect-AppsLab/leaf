import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Barbershop from '../icons/barbershop.svg';
import Zubok from '../icons/zubok.svg';
import Coffee from '../icons/coffee.svg';
import CardActionArea from "@material-ui/core/CardActionArea";


const getCaseStudies = () => {
    return [
        {id: 12, name: "Schollar barbershop", icon: "Barbershop"},
        {id: 26, name: "Čistý zúbok", icon: "Zubok"},
        {id: 31, name: "Honest coffee", icon: "Coffee"}
    ]
}


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

    const renderCard = (idCase, name, icon) => {
        return (
            <Card id={idCase} className={classes.card}>
                <CardActionArea>
                    <CardContent className={classes.content} style={{backgroundImage: `url(${icon})`}}>
                        <Typography
                            className={classes.title}
                            gutterBottom
                        >
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    };


    const caseStudies = getCaseStudies();

    return (
        <div
            style={{
                overflowX: "auto",
                overflowY: "hidden",
                whiteSpace: "nowrap",
            }}
        >
            {caseStudies.map((caseStudy) => renderCard(caseStudy.id, caseStudy.name, caseStudy.icon))}
        </div>
    );
}

import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles({

    card: {
        padding: "10px",
        textAlign: 'center',
        marginTop: "30px",
        marginBottom: "30px",
        marginRight: "auto",
        marginLeft: "auto",
        overflowX: "auto",
        backgroundColor: "transparent",
        border: '3px solid white',
        maxWidth: 600,
        borderRadius: '6px',
        position: 'relative'
    },
    lockicon: {
        right: '10px',
        bottom: '5px',
        position: 'absolute',
        color: 'white',
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'white',
    },
    pos: {
        marginBottom: 12
    }
});

export default function CategoryCard() {
    const classes = useStyles();

    const renderCard = title => {
        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardContent>
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                        >
                            {title}
                        </Typography>
                        <div>
                            <LockIcon className={classes.lockicon}/>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>

        );
    };

    const headlines = ["Zákazníci", "Problém a konkurencia", "Unikátnosť produktu", "Riešenie",
        "Neférová výhoda", "Zdroj príjmov", "Kľúčové metriky", "Náklady", "Marketingové náklady"];

    return (
        <div
            style={{
                overflowX: "auto",
                overflowY: "hidden",
                whiteSpace: "nowrap",
            }}
        >
            {headlines.map(headline => renderCard(headline))}
        </div>
    );
}

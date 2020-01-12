import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Backround_cisty_zubok from "../icons/backround_cisty_zubok.svg";

const useStyles = makeStyles({

  card: {
    padding: "10px",
    textAlign: 'center',
    marginTop: "30px",
    marginBottom: "30px",
    marginRight: "15px",
    marginLeft: "15px",
    overflowX: "auto",
    backgroundColor: "transparent",
    border: '3px solid white',
    borderRadius: '6px',

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

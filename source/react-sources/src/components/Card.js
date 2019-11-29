import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    width: 200,
    height: 200,
    margin: 5,
    display: "inline-block",
    padding: "10px",
      // Tento padding sa tyka velkosti jednotlivych kariet
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard() {
  const classes = useStyles();

  const renderCard = title => {
    return (
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {title}
              </Typography>
            </CardContent>
          </Card>
    );
  };

  const headlines = ["Barber shop", "Módna značka", "Dizajn štúdio"];

  return (
    <div
      style={{
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        paddingTop: "10px",
          // Tuto to paddujes, aby to nebolo nalepene na header
      }}
    >
      {headlines.map(headline => renderCard(headline))}
    </div>
  );
}

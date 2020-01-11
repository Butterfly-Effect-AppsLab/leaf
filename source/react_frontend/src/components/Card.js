import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Barbershop from '../icons/barbershop.svg';
import Zubok from '../icons/zubok.svg';
import Coffee from '../icons/coffee.svg';


const useStyles = makeStyles({
  card: {
    width: 150,
    height: 150,
    margin: 5,
    display: "inline-block",
    padding: "10px",
    overflowX: "auto",
    background: "#EFCA59",
    backgroundImage: `url(${Barbershop})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "150px 150px",
    backgroundPosition: "left center",
      // Tento padding sa tyka velkosti jednotlivych kariet
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  const renderCard = title => {
    return (
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                gutterBottom
              >
                {title}
              </Typography>
            </CardContent>
          </Card>
    );
  };

  const headlines = ["Schollar Barbershop", "Čistý zúbok", "Honest Coffee"];
  const icons = ["Barbershop", "Zubok", "Coffee"];

  return (
        <div
          style={{
            overflowX: "auto",
            overflowY: "hidden",
            whiteSpace: "nowrap",
            // paddingTop: "10px",
              // Tuto to paddujes, aby to nebolo nalepene na header --- presunute do Layoutu
          }}
        >
            {headlines.map(headline => renderCard(headline))}
        </div>
  );
}

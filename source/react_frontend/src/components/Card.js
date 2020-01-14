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
    backgroundImage: `url(${Barbershop})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "170px 170px",
    backgroundPosition: "left center",
    position: "relative",
    padding: 0,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  const renderCard = title => {
    return (
          <Card className={classes.card}>
              <CardActionArea>
              <CardContent className={classes.content}>
                  <Typography
                    className={classes.title}
                    gutterBottom
                  >
                    {title}
                  </Typography>
              </CardContent>
              </CardActionArea>
          </Card>
    );
  };

  const headlines = ["Schollar barbershop", "Čistý zúbok", "Honest coffee"];
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

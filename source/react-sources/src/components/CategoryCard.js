import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    padding: "10px",
    marginTop: "30px",
    marginBottom: "30px",
    marginRight: "15px",
    marginLeft: "15px",
    overflowX: "auto",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  pos: {
    marginBottom: 12
  }
});

export default function MediaCard() {
  const classes = useStyles();

  const renderCard = title => {
    return (
          <Card className={classes.card}>
            <CardActionArea>
            <CardMedia
              className={classes.media}
              //image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
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

  const headlines = ["Partners", "Activities", "Resources", "Customer relationships", 
                     "Channels", "Value Proposition", "Customer segments", "Cost structure", "Revenue streams"];

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
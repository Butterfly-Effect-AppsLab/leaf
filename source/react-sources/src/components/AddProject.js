import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  card: {
    width: 200,
    height: 200,
    margin: 5,
    display: "inline-block",
    padding: "10px",
    overflowX: "auto",
      // Tento padding sa tyka velkosti jednotlivych kariet
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    display: "block",
  },
  pos: {
    marginBottom: 12
  }
});

export default function AddCard() {
  const classes = useStyles();
  let [count, setCount] = React.useState(0);
  let projects = [];

  const handleClick = () => {
      setCount(count + 1);
  };

  switch (count) {
          case 1:
              projects = ["Projekt 1"];
              break;
          case 2:
              projects = ["Projekt 1", "Projekt 2"];
              break;
          case 3:
              projects = ["Projekt 1", "Projekt 2", "Projekt 3"];
              break;
          default:
              count = 0;
              break;
      }


      const renderCard = (text) => {
          return (
              <Card className={classes.card}>
                  <CardContent>
                      <Typography
                          className={classes.title}
                          color="textSecondary"
                          gutterBottom
                      >
                          {text}
                      </Typography>
                  </CardContent>
              </Card>
          );
      };

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
              {projects.map(project => renderCard(project))}
              <Card className={classes.card}>
                  <CardContent>
                      <IconButton onClick={handleClick} style={{display: 'block', margin: 'auto'}}
                                  aria-label="add-project" color="primary">
                          <AddCircleIcon fontSize="large"/>
                      </IconButton>
                      <Typography
                          className={classes.title}
                          color="textSecondary"
                          gutterBottom
                      >
                          Vytvoriť nový projekt
                      </Typography>
                  </CardContent>
              </Card>
          </div>
      );
  }


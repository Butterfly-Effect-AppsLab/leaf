import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles( theme => ({
  card: {
    padding: "10px",
    textAlign: 'center',
    margin: theme.spacing(1),
    overflowX: "auto",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
}));


export default function ProfileCards(props) {
  const classes = useStyles();
  const type = props.type;

  const renderCard = title => {
      switch(type) {
          case "firm":
              return (
                  <Card className={classes.card} style={{backgroundColor:"#EFCA59"}}>
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
          case "project":
              return (
                  <Card className={classes.card} style={{backgroundColor:"#E17A47"}}>
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
          default:
              break;
      }
  };


  const firmHeadlines = ["Čistý zúbok"];
  let projectHeadlines =  (JSON.parse(localStorage.getItem('nameProjects')) || []);

  switch(type) {
      case "firm":
          return (
              <div
                  style={{
                      overflowX: "auto",
                      overflowY: "hidden",
                      whiteSpace: "nowrap",
                  }}
              >
                  {firmHeadlines.map(firmHeadline => renderCard(firmHeadline))}
              </div>
          );
      case "project":
          return (
              <div
                  style={{
                      overflowX: "auto",
                      overflowY: "hidden",
                      whiteSpace: "nowrap",
                  }}
              >
                  {projectHeadlines.map(projectHeadline => renderCard(projectHeadline))}
              </div>
          );
      default:
          break;
  }
}

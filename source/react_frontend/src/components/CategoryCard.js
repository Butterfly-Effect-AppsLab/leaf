import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LockIcon from '@material-ui/icons/Lock';

const getStages = () => {
  return [{id: 1, name: "Zákazníci"},
          {id: 2, name: "Problém a konkurencia"},
          {id: 3, name: "Unikátnosť produktu"},
          {id: 4, name: "Riešenie"},
          {id: 5, name: "Neférová výhoda"},
          {id: 6, name: "Zdroj príjmov"},
          {id: 7, name: "Kľúčové metriky"},
          {id: 8, name: "Náklady"},
          {id: 9, name: "Marketingové náklady"}
  ]
};

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

  const renderCard = ( idStage, name ) => {
    return (
          <Card id={idStage} className={classes.card}>
            <CardActionArea>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {name}
              </Typography>
              <div>
                  <LockIcon className={classes.lockicon} />
              </div>
            </CardContent>
            </CardActionArea>
          </Card>

    );
  };

  const stages = getStages();

  return (
        <div
          style={{
            overflowX: "auto",
            overflowY: "hidden",
            whiteSpace: "nowrap",
          }}
        >
            {stages.map(stage => renderCard(stage.id, stage.name))}
        </div>
  );
}

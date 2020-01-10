import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  card: {
    width: 150,
    height: 150,
    margin: 5,
    display: "inline-block",
    padding: "10px",
    overflowX: "auto",
    background: "#E17A47",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    verticalAlign: "middle",


  },
  pos: {
    marginBottom: 12
  }
});
export default function AddProject() {
  let helpCount = JSON.parse(localStorage.getItem('numProjects'));
  let helpNames = JSON.parse(localStorage.getItem('nameProjects'));
  const classes = useStyles();
  const [count, setCount] = React.useState(helpCount || 0);
  const [projects, setProjects] = React.useState(helpNames || []);

  React.useEffect(() => {
    localStorage.setItem('numProjects', JSON.stringify(count));
    localStorage.setItem('nameProjects', JSON.stringify(projects));
  }, [count, projects]);


  const handleClick = () => {
      let newCount = count + 1;
      if(newCount > 3) {
        newCount = 0
      }
      // localStorage.setItem('numProjects', newCount);
      setCount(newCount);
      switch (newCount) {
        case 0:
            setProjects([]);
            break;
        case 1:
            setProjects(["Projekt 1"]);
            break;
        case 2:
            setProjects(["Projekt 1", "Projekt 2"]);
            break;
        case 3:
            setProjects(["Projekt 1", "Projekt 2", "Projekt 3"]);
            break;
        default:
            break;
    }
  };




      const renderCard = (text) => {
          return (
              <Card className={classes.card}>
                  <CardContent>
                      <Typography
                          className={classes.title}
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


import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import Rocket from '../icons/rocket.svg'
import Barbershop from "../icons/barbershop.svg";
import CardActionArea from "@material-ui/core/CardActionArea";
import * as ProjectColors from "../utils/colors";
import history from "../utils/history";


const useStyles = makeStyles({
   addCard: {
       width: 150,
       height: 150,
       margin: 5,
       display: "inline-block",
       padding: "10px",
       overflowX: "auto",
       background: ProjectColors.lightGray(),
       position: "relative",
   },
   addTitle: {
        fontSize: 20,
        color: "#A6AAB4",
        fontWeight: "bold",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        whiteSpace: "normal",
        textAlign: "center",
        minWidth: "130px",
  },
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
        color: ProjectColors.white(),
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
        background: ProjectColors.orange(),
        backgroundImage: `url(${Rocket})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "160px 160px",
        backgroundPosition: "-200% 380%",
        position: "relative",
        padding: 0,
      },
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


  const handleAddProject = () => {
      let newCount = count + 1;
      if(newCount > 3) {
        newCount = 3
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

      const handleClick = () => {
        history.push('/ProjectInfo')
    };



      const renderCard = (text) => {
          return (
              <Card className={classes.card} onClick={() => {
                handleClick()
            }}>
                  <CardActionArea>
                      <CardContent className={classes.content}>
                          <Typography
                              className={classes.title}
                              gutterBottom
                          >
                              {text}
                          </Typography>
                      </CardContent>
                  </CardActionArea>
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
              <Card className={classes.addCard}>
                  <CardContent>
                      <IconButton onClick={handleAddProject} style={{position: "relative", top: -20, display: 'block', margin: 'auto'}}
                                  aria-label="add-project" color="primary">
                          <AddCircleIcon fontSize="large"/>
                      </IconButton>
                      <Typography
                          className={classes.addTitle}
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


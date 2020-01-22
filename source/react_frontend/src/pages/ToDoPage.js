import ToDo from "../components/ToDo";
import React from "react";
import {makeStyles} from "@material-ui/core";
import ProjectBackground from "../icons/background_projekt_orange.svg";
import Button from "@material-ui/core/Button"
import FormGroup from "@material-ui/core/FormGroup";
import * as ProjectColors from "../utils/colors";

const useStyles = makeStyles(theme => ({
    root: {
        height: "100%",
        width: "100%",
        marginTop: '80px',
        marginBottom: '60px',
        background: ProjectColors.lightGray(),
        backgroundImage: `url(${ProjectBackground})`,
    },
    title: {
        color: ProjectColors.darkGray(),
        padding: 20,
        paddingTop: 10,
        fontSize: 21,
        textAlign: "center",
        margin: 0,
    },
    button: {
        width: "130px",
        position: "relative",
        color: "white"
    },
    tasks: {
        paddingLeft: "10%",
        paddingRight: "10%",
    },
}));

const getToDos = () => {
    return [
        {id: 1, task: "Over si u tvojich potenciálnych zákazníkov, že sú schopní si tvoj produkt kúpiť."},
        {
            id: 2,
            task: "Vyšpecifikuj si svojho zákazníka čo najpresnejšie (vek, profesia, lokalita, záujmy) a vytvor si tak svoju personu."
        },
        {
            id: 3,
            task: "Mysli na to, že prvotný produkt musí byť šitý na potreby prvých zákazníkov. Spýtaj sa ich, či to tvoj produkt spĺňa."
        },
        {id: 4, task: "Ak máš viaceré typy zákazníkov, urob si pre každý typ zákazníka vlastnú personu."},
    ]
};

const ToDoPage = () => {
    const classes = useStyles();


    const renderToDo = (idToDo, task) => {
        return (
            <ToDo label={task}/>
        )
    };

    const ToDos = getToDos();

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>Tudúčka</h1>
            <div className={classes.tasks}>
                <FormGroup>
                    {ToDos.map((ToDo) => renderToDo(ToDo.id, ToDo.task))}
                </FormGroup>
            </div>
            <br/>
            <div align="center">
                <Button variant="contained" color="primary" className={classes.button}>Ďalej</Button>
            </div>
            <br/>
        </div>
    )
};

export default ToDoPage;
import React from "react";
import MultilineTextField from '../components/MultilineTextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core";
import BackgroundProjectWhite from "../icons/background_project_white.svg";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


const useStyles = makeStyles({
        background: {
            backgroundColor: "#E17A47",
            backgroundImage: `url(${BackgroundProjectWhite})`,
            align: "center",
            marginBottom: "60px",
            marginTop: "80px",
            height: "100%",
            width: "100%",
            margin: 0,
        },
        title: {
            padding: 10,
            paddingLeft: "10%",
            paddingRight: "10%",
            margin: 0,
            fontSize: "16px",
            textAlign: "center",
            color: "white",
        },
        textfield: {
            paddingRight: "10%",
            paddingLeft: "10%",
            margin: 0,
        },
        toggle: {
            width: "100px",
            boxShadow: "0px 4px 26px rgba(0, 0, 0, 0.06)",
            background: "transparent",
        },
        group: {
            boxShadow: "0px 4px 26px rgba(0, 0, 0, 0.06)",
            background: "rgba(255, 255, 255, 0.5)",
        },
        button: {
            background: "#46B29D",
            color: "white",
            width: "200px",
        },
    })
;

const ProjectInfo = () => {
    const classes = useStyles();
    const [project, setProject] = React.useState('');

    const handleClick = (event, newProject) => {
        setProject(newProject);
    };


    return (
        <div className={classes.background}>
            <h3 className={classes.title}>
                Zamysli sa nad tým, aký nápad chceš rozvíjať a vypíš si základné parametre,
                ktoré tento nápad zakategorizujú.
            </h3>

            <div className={classes.textfield}>
                <MultilineTextField field_name='Názov projektu' row_num={2}/>
            </div>
            <br/>

            <h3 className={classes.title}>
                Aky typ nápadu chceš rozvíjať?
            </h3>
            <div align="center">
                <ToggleButtonGroup
                    className={classes.group}
                    value={project}
                    exclusive
                    onChange={handleClick}
                    aria-label="project category"
                >
                    <ToggleButton className={classes.toggle} value="product" aria-label="product category">
                        Produkt
                    </ToggleButton>
                    <ToggleButton className={classes.toggle} value="service" aria-label="service category">
                        Služba
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <br/>
            < h3
                className={classes.title}>
                O čom bude tvoj projekt?
            </h3>

            <div className={classes.textfield}>
                <MultilineTextField
                    field_name='Popíš pár vetami, čomu sa chceš vo svojom projektu venovať a prečo si sa rozhodol práve pre tento?'
                    row_num={6}/>
            </div>
            <br/>
            <div align="center">
                <Button variant="contained" className={classes.button}>
                    Rozbehni svoj biznis
                </Button>
            </div>
        </div>
    )
};

export default ProjectInfo;
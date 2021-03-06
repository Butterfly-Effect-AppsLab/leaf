import React from "react";
import MultilineTextField from '../components/MultilineTextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core";
import BackgroundProjectWhite from "../icons/background_project_white.svg";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import * as ProjectColors from "../utils/colors";
import history from "../utils/history";

const useStyles = makeStyles({
        background: {
            // backgroundColor: ProjectColors.orange(),
            // backgroundImage: `url(${BackgroundProjectWhite})`,
            align: "center",
            marginBottom: "80px",
            // marginTop: "80px",
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
            color: ProjectColors.white(),
        },
        textfield: {
            paddingRight: "10%",
            paddingLeft: "10%",
            margin: 0,
        },
        toggle: {
            width: "100px",
            background: "transparent",
        },
        label: {
            color: ProjectColors.darkGray(),
        },
        group: {
            background: ProjectColors.transWhite(),
        }
        ,
        button: {
            background: ProjectColors.green(),
            color:
                ProjectColors.white(),
            width:
                "200px",
            boxShadow:
                'none',
        }
    })
;
/*
const projects = {
    1: {
        description: "Moj projekt zachrani vsetky macky bez domova na svete.",
        id: 19,
        id_user: 10,
        name: "Projekt 1",
        theme: null,
        specialization: "Projekt"
    },
    2: {
        description: "A tento projekt zachrani vsetky psy bez domova na svete.",
        id: 20,
        id_user: 10,
        name: "Projekt 2",
        theme: null,
        specialization: "Sluzba"
    },
};
*/
const ProjectInfo = (props) => {
        const classes = useStyles();
        const [project, setProject] = React.useState('');
        const {projectObject} = props.location.state;

        const handleChooseType = (event, newProject) => {
            setProject(newProject);
        };

        const handleClick = () => {
            history.push('/LcKategorie', {idProject: projectObject.id, type: "project"})
        };

        return (
            <div className={classes.background}>
                <h3 className={classes.title}>
                    Zamysli sa nad tým, aký nápad chceš rozvíjať a vypíš si základné parametre,
                    ktoré tento nápad zakategorizujú.
                </h3>

                <div className={classes.textfield}>
                    <MultilineTextField text={projectObject.name} field_name='Názov projektu' row_num={2}
                                        background_color={ProjectColors.transWhite()}/>
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
                        onChange={handleChooseType}
                        aria-label="service category"
                    >
                        <ToggleButton
                            className={classes.toggle}
                            selected={projectObject.specialization === "product"}
                            value="product"
                            aria-label="product category"
                            classes={{
                                label: classes.label
                            }}
                        >
                            Produkt
                        </ToggleButton>
                        <ToggleButton
                            className={classes.toggle}
                            selected={projectObject.specialization === "service"}
                            value="service"
                            aria-label="service category"
                            classes={{
                                label: classes.label
                            }}
                        >
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
                        text={projectObject.description}
                        field_name='Popíš pár vetami, čomu sa chceš vo svojom projektu venovať a prečo si sa rozhodol práve pre tento?'
                        row_num={6}
                        background_color={ProjectColors.transWhite()}
                    />
                </div>
                <br/>
                <div align="center">
                    <Button variant="contained" className={classes.button} onClick={() => {
                        handleClick()
                    }}>
                        Rozbehni svoj biznis
                    </Button>
                </div>
                <br/>
            </div>
        )
    }
;

export default ProjectInfo;
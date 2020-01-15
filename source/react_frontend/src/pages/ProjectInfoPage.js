import React from "react";
import MultilineTextField from '../components/MultilineTextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core";
import BackgroundProjectWhite from "../icons/background_project_white.svg";


const useStyles = makeStyles({
    background: {
        backgroundColor: "#E17A47",
        backgroundImage: `url(${BackgroundProjectWhite})`,
        align: "center",
        marginBottom: "60px",
        marginTop: "80px",
        height: "100%",
        width: "100%",
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
        padding: 10,
        paddingLeft: "10%",
        paddingRight: "10%",
        margin: 0,
    },

});

const ProjectInfo = () => {
    const classes = useStyles();
    const [isDisabled, setIsDisabled] = React.useState(false);

    const handleClick = event => {
        setIsDisabled(!isDisabled);
    };


    return (
        <div className={classes.background}>
            <h3 className={classes.title}>
                Zamysli sa nad tým, aký nápad chceš rozvíjať a vypíš si základné parametre,
                ktoré tento nápad zakategorizujú.
            </h3>

            <br/>
            <div className={classes.textfield}>
                <MultilineTextField field_name='Názov projektu' row_num={2}/>
            </div>
            <br/>

            <h3 className={classes.title}>
                Aky typ nápadu chceš rozvíjať?
            </h3>

            <div align="center">
                <Button
                    id='button-service'
                    disabled={isDisabled}
                    onClick={handleClick}
                >Sluzba</Button>

                <Button
                    id='button-product'
                    disabled={!isDisabled}
                    onClick={handleClick}>Produkt</Button>
            </div>

            <h3 className={classes.title}>
                O čom bude tvoj projekt?
            </h3>

            <br/>
            <div className={classes.textfield}>
                <MultilineTextField
                    field_name='Popíš pár vetami, čomu sa chceš vo svojom projektu venovať a prečo si sa rozhodol práve pre tento?'
                    row_num={6}/>
            </div>
            <br/>


        </div>
    )
};

export default ProjectInfo;
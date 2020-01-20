import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import React from "react";
import Drawer from '@material-ui/core/Drawer';

const answerOptions = ["Každého človeka, ktorý si umýva zuby?", "Eco zodpovedných ľudí?", "Rodiny?"]

const useStyles = makeStyles(theme => ({
        typography: {
            width: 'auto',
            textAlign: 'center',
            marginTop: "30px",
            marginBottom: "30px",
            marginRight: "auto",
            marginLeft: "auto",
            overflowX: "auto"
        },
        box: {
            textAlign: 'center',
            marginTop: "30px",
            marginBottom: "60px",
            marginRight: "auto",
            marginLeft: "auto",
            overflowX: "auto",
            backgroundColor: "transparent",
            border: '3px solid #EFCA59',
            borderRadius: '6px',
            maxWidth: '80%',
        },
        answerOption: {
            textAlign: 'center',
            marginTop: "25px",
            marginBottom: "30px",
            marginRight: "5px",
            marginLeft: "5px",
            overflowX: "auto",
        },
        paper: {
            backgroundColor: 'white',
            color: '#7C7C7C',
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: '6px',
        },
        textColor: {
            color: '#EF3D59',
            fontWeight: 'bold',
            fontSize: '17px',
        },
        answer: {
            margin: '15px 15px 15px 15px'
        },
        label: {
            backgroundColor: '#EF3D59',
            borderRadius: '6px',
            textAlign: 'center',
            padding: '5px 42px 5px 42px',
            marginTop: '5px',
            color: 'white'
        },
        questionText: {
            fontSize: '14px',
            color: '#7C7C7C',
        }
    }))
;

export default function AnswerButtons() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        bottom: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [side]: open});
    };

    const answer = side => (
        <div
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <div className={classes.answerOption}>
                <Typography className={classes.textColor}>Nesprávne</Typography>
                <div className={classes.answer}>
                    Pri tvorbe produktu je veľmi dôležité si zákazníka čo najviac vyšpecifikovať,
                    pretože pre príliš všeobecného zákazníka je veľmi náročné prispôsobiť produkt,
                    dizajn či marketing
                </div>
                <Button
                    classes={{
                        label: classes.label,
                    }}>Ok</Button>
            </div>
        </div>
    );

    const renderAnswerOption = answerOption => {
        return (
            <div className={classes.box}>
                <Button onClick={toggleDrawer('bottom', true)}>{answerOption}</Button>
                <Drawer
                    classes={{
                        paper: classes.paper,
                    }}
                    anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
                    {answer('bottom')}
                </Drawer>
            </div>
        );
    };
        return (
            answerOptions.map(answerOption => renderAnswerOption(answerOption))
        )

};

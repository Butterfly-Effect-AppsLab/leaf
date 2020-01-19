import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import React from "react";
import Drawer from '@material-ui/core/Drawer';

// const renderButton = answer => {
//     return (
//         <Button className={classes.button}>
//             {answer}
//         </Button>
//     );
// };

// const options = ["Každého človeka, ktorý si umýva zuby", "Eco zodpovedných ľudí", "Rodiny"]

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
    },
    answerOption: {
        textAlign: 'center',
        marginTop: "30px",
        marginBottom: "30px",
        marginRight: "auto",
        marginLeft: "auto",
        overflowX: "auto",
        backgroundColor: "transparent",
        border: '3px solid #EFCA59',
        borderRadius: '6px',
        width: '100%'
    },
    buttonOK: {
        backgroundColor: '#EF3D59',
        textColor: 'white'
    },
    textColor: {
        textColor: '#EF3D59'
    }
}));

export default function TemporaryDrawer() {
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
        <div className={classes.box}
             role="presentation"
             onClick={toggleDrawer(side, false)}
             onKeyDown={toggleDrawer(side, false)}
        >
            <div>
                <div className={classes.textColor}>Nesprávne</div>
                    <div>
                        Pri tvorbe produktu je veľmi dôležité si zákazníka čo najviac vyšpecifikovať,
                        pretože pre príliš všeobecného zákazníka je veľmi náročné prispôsobiť produkt,
                        dizajn či marketing
                    </div>
                    <Button className={classes.buttonOK}>Ok</Button>
                </div>
            </div>
            );

            return (
            <div>
                <Button className={classes.answerOption} onClick={toggleDrawer('bottom', true)}>Odpoved</Button>
                <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
                    {answer('bottom')}
                </Drawer>
            </div>
            );
            }

import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LockIcon from '@material-ui/icons/Lock';
import history from '../utils/history';

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {actionGetStages} from "../redux/actions";
import {getStages} from "../redux/selectors";
import {Link} from "@material-ui/core";

/*const getStages = () => {
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
};*/

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

const CategoryCard = (props) => {
    const stages = props.data.stages;
    const {idCase, type} = props;
    const classes = useStyles();
    // const [route, setRoute] = React.useState('');
    // const [color, setColor] = React.useState('');
    // const [lockIcon, setLockIcon] = React.useState('');
    //
    // if (type === "firm") {
    //     setRoute('/LCFirma')
    //
    // }

    const handleClick = (idStage) => {
        history.push('/LCFirma', {idStage: idStage, idCase: idCase})
    };

    useEffect(() => {
        props.actionGetStages()
    },
        []
    );

    const renderCard = (idStage, name) => {
        return (
            <Card id={idStage} className={classes.card} onClick={() => {
                handleClick(idStage)
            }}>
                <CardActionArea>
                    <CardContent>
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                        >
                            {name}
                        </Typography>
                        <div>
                            <LockIcon className={classes.lockicon}/>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>

        );
    };

    if (stages) {
        return (
            <div
                style={{
                    overflowX: "auto",
                    overflowY: "hidden",
                    whiteSpace: "nowrap",
                }}
            >
                {Object.keys(stages).sort().map(id => renderCard(id, stages[id].name))}
            </div>
        );
    } else {
        return null
    }
};


const mapStateToProps = state => {
    const data = {
        stages: getStages(state)
    };
    return {data};
};

const mapDispatchToProps = dispatch => ({
    actionGetStages: bindActionCreators(actionGetStages, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCard);

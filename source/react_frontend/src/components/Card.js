import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";

import Barbershop from '../icons/barbershop.svg';
import Zubok from '../icons/zubok.svg';
import Coffee from '../icons/coffee.svg';

import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionGetCaseStudies } from "../redux/actions";
import { getCaseStudies } from "../redux/selectors";

/*
const getCaseStudies = () => {
    return [
        { id: 12, name: "Schollar barbershop", icon: Barbershop, position: "80% 50%" },
        { id: 26, name: "Čistý zúbok", icon: Zubok, position: "40% 150%" },
        { id: 31, name: "Honest coffee", icon: Coffee, position: "-80% 50%" },
    ]
};
*/

const useStyles = makeStyles({
    card: {
        width: 170,
        height: 170,
        display: "inline-block",
        overflowX: "auto",
        margin: 5,
        fontSize: 20,
        fontWeight: "bold",
    },
    title: {
        fontSize: 20,
        margin: 0,
        fontWeight: "bold",
        color: "white",
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
        background: "#EFCA59",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
        position: "relative",
        padding: 0,
    },
});

const SimpleCard = (props) => {
    const caseStudies = props.data.caseStudies;
    const classes = useStyles();

    useEffect(() => {
        props.actionGetCaseStudies(props.dispatch)
    },
        []
    );

    console.log(props.data.caseStudies);
    const renderCard = (idCase, name/*, icon, position*/) => {
        return (
            <Card id={idCase} className={classes.card}>
                <CardActionArea>
                    <CardContent className={classes.content} style={{ /*backgroundImage: `url(${icon})`, backgroundPosition: position,*/ }}>
                        <Typography
                            className={classes.title}
                        >
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    };

    if (caseStudies) {

        return (
            <div
                style={{
                    overflowX: "auto",
                    overflowY: "hidden",
                    whiteSpace: "nowrap",
                }}
            >
                {
                    Object.keys(caseStudies).sort().map(
                        (id) => renderCard(id, caseStudies[id].name/*, caseStudy[id].icon, caseStudy[id].position*/)
                    )
                }
            </div>
        );
    }
    else {
        return null
    }
}


const mapStateToProps = state => {
    const data = {
        caseStudies: getCaseStudies(state)
    };
    return { data };
};

const mapDispatchToProps = dispatch => ({
    actionGetCaseStudies: bindActionCreators(actionGetCaseStudies, dispatch),
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCard);

import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import * as ProjectColors from "../utils/colors";

const useStyles = makeStyles(theme => ({
    card: {
        padding: "10px",
        textAlign: 'center',
        margin: theme.spacing(1),
        overflowX: "auto",
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: ProjectColors.white(),
        margin: 0,
    },
}));


export default function ProfileCards(props) {
    const classes = useStyles();
    const {type} = props;
    const {color} = props;

    const renderCard = (title) => {
        return (
            <Card className={classes.card} style={{backgroundColor: color}}>
                <CardActionArea>
                    <CardContent>
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                        >
                            {title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    };

    const firmHeadlines = ["Čistý zúbok"];
    let projectHeadlines = (JSON.parse(localStorage.getItem('nameProjects')) || []);

    const renderSwitch = (type) => {
        switch (type) {
            case 'firm':
                return(firmHeadlines.map(firmHeadline => renderCard(firmHeadline)));
            case 'project':
                return(projectHeadlines.map(projectHeadline => renderCard(projectHeadline)));
            default:
                break;
        }
    };


    return (
        <div
            style={{
                overflowX: "auto",
                overflowY: "hidden",
                whiteSpace: "nowrap",
            }}
        >
            {renderSwitch(type)}
        </div>
    );
}

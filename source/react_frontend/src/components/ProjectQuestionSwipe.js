import React from 'react';
import CompanyLCquestion from "../components/CompanyLCquestion";
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MultilineTextField from "./MultilineTextField";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    questions: {
        width: 'max-content',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: 'transparent'
    },
    appBar: {
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: "transparent",
        boxShadow: 'none',
        paddingTop: '30px'
    },
    indicator: {
        backgroundColor: '#7C7C7C',
        borderRadius: '10px',
    },
}));

const questions = [
    {
        id: 1,
        questionId: 1,
        questionText: "Kto bude tvoj zákazník, teda ten, ktorý bude schopný a ochotný za produkt zaplatiť?",
    },
    {
        id: 1,
        questionId: 2,
        questionText: "Kto budú tvoji prví zákazníci, tzv. lastovičky?",
    },
    {
        id: 1,
        questionId: 3,
        questionText: 'Máš viac skupín potencionálnych zákazníkov?' ,
    }
];

export default function ScrollableTabsButtonAuto() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const renderTab = (question, questionId) => {
        return (
            <Tab label={"Otázka " + String(questionId)} {...a11yProps(question.id)}/>
        )

    };
    return (
        <div className={classes.root}>
            <div className={classes.questions}>

                <AppBar position="static" className={classes.appBar}>
                    <Tabs
                        classes={{
                            indicator: classes.indicator,
                        }}
                        value={value}
                        onChange={handleChange}
                        textColor="#7C7C7C"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        {questions.map((question) => renderTab(question.questionText, question.questionId))}
                    </Tabs>
                </AppBar>
            </div>
            {questions.map((question, index) => (
                <TabPanel value={value} index={index}>
                    <CompanyLCquestion text={question.questionText}/>
                    <MultilineTextField/>
                </TabPanel>
            ))}
        </div>
    );
}
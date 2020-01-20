import React from 'react';
import CompanyLCquestion from "../components/CompanyLCquestion";
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AnswerButtons from "./AnswerButtons";
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


const questions = ["Akého zákazníka si podľa teba vytipovala spoločnosť Čistý zúbok?", "Akého zákazníka si podľa teba vytipovala spoločnosť Čistý zúbok?", "Koho si Čistý zúbok zvolil ako prvých \"skúšobných\" zákazníkov?"];

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

export default function ScrollableTabsButtonAuto() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    let questionNum = 0;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const renderTab = (question) => {
        questionNum = questionNum + 1;
        return (
            <Tab label={"Otázka " + questionNum}/>
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
                        {questions.map(question => renderTab(question))}
                    </Tabs>
                </AppBar>
                <CompanyLCquestion/>
            </div>
            <TabPanel value={value} index={0}>
                <AnswerButtons/>
            </TabPanel>
            <TabPanel value={value} index={1}>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <AnswerButtons/>
            </TabPanel>
        </div>
    );
}
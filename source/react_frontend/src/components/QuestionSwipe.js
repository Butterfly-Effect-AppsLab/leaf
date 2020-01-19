import React from 'react';
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
        boxShadow: 'none'
    }
}));

export default function ScrollableTabsButtonAuto() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <div className={classes.questions}>
                <AppBar position="static" color="default" className={classes.appBar}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="#7C7C7C"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <Tab label="Otázka 1" {...a11yProps(0)} />
                        <Tab label="Otázka 2" {...a11yProps(1)} />
                        <Tab label="Otázka 3" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
            </div>
            <TabPanel value={value} index={0}>
                <AnswerButtons/>
                <AnswerButtons/>
                <AnswerButtons/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <AnswerButtons/>
                <AnswerButtons/>
                <AnswerButtons/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <AnswerButtons/>
                <AnswerButtons/>
                <AnswerButtons/>
            </TabPanel>
        </div>
    );
}
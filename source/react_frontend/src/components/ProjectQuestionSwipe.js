import React, { useEffect } from 'react';
import CompanyLCquestion from "../components/CompanyLCquestion";
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MultilineTextField from "./MultilineTextField";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import * as ProjectColors from "../utils/colors";
import MyProjectButtons from "./MyProjectButtons";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionGetProjectStage } from "../redux/actions";
import { getProjectStages } from "../redux/selectors";



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
        backgroundColor: ProjectColors.darkGray(),
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
        questionText: 'Máš viac skupín potencionálnych zákazníkov?',
    }
];


const ScrollableTabsButtonAuto = (props) => {
    const { idProject, idStage } = props;

    const classes = useStyles();
    const [currentQuestion, setCurrentQuestion] = React.useState(0);


    const projectStages = props.data.projectStages;
    console.log('qqqqqqqqqqqqqq', projectStages);
    const projectStage = projectStages[idStage];
    //const projectStage = projectStages[currentCategory + 1];


    console.log('dataaaa', projectStage);
    //console.log('current category', currentCategory);
    useEffect(() => {
        //console.log('v use effect', currentCategory);
        //props.actionGetCaseStudyStage(idProject, currentCategory + 1);
        props.actionGetProjectStage(idProject, idStage);
        console.log('alll stages', projectStages);
    },
        [] //[currentCategory]
    );



    const handleChange = (event, newValue) => {
        setCurrentQuestion(newValue);
    };

    const goToNextQuestion = () => {
        if (currentQuestion < 2) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const renderTab = (idQuestion) => {
        return (
            <Tab label={"Otázka " + String(idQuestion)} {...a11yProps(idQuestion)}/>
        )
    };

    if(projectStage){
        return (
            <div className={classes.root}>
                <div className={classes.questions}>

                    <AppBar position="static" className={classes.appBar}>
                        <Tabs
                            classes={{
                                indicator: classes.indicator,
                            }}
                            value={currentQuestion}
                            onChange={handleChange}
                            textColor={ProjectColors.darkGray()}
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                        >
                            {questions.map((question) => renderTab(question.id))}
                        </Tabs>
                    </AppBar>
                </div>
                {/*questions.map((question, index) => (
                    <TabPanel value={currentQuestion} index={index}>
                        <CompanyLCquestion text={question.questionText}/>
                        <MultilineTextField row_num={6} background_color={"transparent"}/>
                        <MyProjectButtons goToNextQuestion={() => {
                            goToNextQuestion()
                        }}/>
                    </TabPanel>
                ))*/}
                {Object.keys(projectStage).sort().map((idOrder, index) => (
                    <TabPanel value={currentQuestion} index={index}>
                        <CompanyLCquestion text={projectStage[idOrder].question_text}/>
                        <MultilineTextField row_num={6} text={projectStage[idOrder].answer.answer_text} background_color={"transparent"}/>
                        <MyProjectButtons goToNextQuestion={() => {
                            goToNextQuestion()
                        }}/>
                    </TabPanel>
                ))}

            </div>
        );
    } else {
        return null
    }
};


const mapStateToProps = (state, props) => {
    console.log('props v projectquestionswipe', props);
    const { idProject } = props
    const data = {
        projectStages: getProjectStages(state, idProject)
    };
    return { data };
};

const mapDispatchToProps = dispatch => ({
    actionGetProjectStage: bindActionCreators(actionGetProjectStage, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScrollableTabsButtonAuto);

import React, { useEffect } from 'react';
import CompanyLCquestion from "../components/CompanyLCquestion";
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AnswerButtons from "./AnswerButtons";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import * as ProjectColors from "../utils/colors";


import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionGetCaseStudyStage } from "../redux/actions";
import { getCaseStudyStages } from "../redux/selectors";


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

function TabPanel(props) {
    const { children, value, index, ...other } = props;

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
/*
const questions = {
    1: {
        id: 1,
        questionId: 1,
        questionText: "Akého zákazníka si podľa teba vytipovala spoločnosť Čistý zúbok?",
        answers: {
            1: {
                answerId: 1,
                answerText: "Každého človeka, ktorý si umýva zuby",
                isCorrect: false,
                explanation: "Pri tvorbe produktu je veľmi dôležité si zákazníka čo najviac vyšpecifikovať, pretože pre príliš všebecného zákazníka je veľmi náročné prispôsobiť produkt, dizajn či marketing."
            },
            2: {
                answerId: 2,
                answerText: "Eco zodpovedných ľudí",
                isCorrect: false,
                explanation: "Eko zodpovední ľudia sú tiež zákazníkmi Čistého zúbka. Na trhu však už existuje viacero alternatív eko zubných kefiek. Odlišnosťou Čistého zúbka je predplatné. Skús vybrať zákazníka, pre ktorého je dôležitá včasná automatická výmena kefiek."
            },
            3: {
                answerId: 3,
                answerText: "Rodiny",
                isCorrect: true,
                explanation: "Pracujúci rodičia v záplave svojich povinností zabúdajú sledovať stav zubných kefiek členov svojej rodiny, preto pravidlená automatická zásielka eko zubných kefiek je pre nich skvelým riešením."
            }
        }


    },
    2: {
        id: 1,
        questionId: 2,
        questionText: "Koho si Čistý zúbok zvolil ako prvých \"skúšobných\" zákazníkov?",
        answers: {
            1: {
                answerId: 1,
                answerText: "Náhodných prvých zákazníkov, ktorí si produkt objednali",
                isCorrect: false,
                explanation: "Prvých zákazníkov, tzv. \"lastovičky\" je potrebné si vybrať vopred. Musia sa zhodovať s vytipovaným zákazníkom, pre ktorého je produkt prispôsobovaný."
            },
            2: {
                answerId: 2,
                answerText: "Zákazníkov z mesta, kde firma vznikla",
                isCorrect: true,
                explanation: "Lastovičky, resp. prví zákazníci by mali byť ľahko dostupní kvôli čo najnižším nákladom na marketing a tiež totožní s typom cieľového zákazníka. Sú to zákazníci, ktorí poskytujú hodnotenie produktu pred oficiálnym spustením predaja."
            },
            3: {
                answerId: 3,
                answerText: "Cielene vybraných zákazníkov, ktorí prejavili záujem o predplatenú službu",
                isCorrect:
                    false,
                explanation:
                    "Lastovičky, ako voláme prvých zákazníkov, dávajú spätnú väzbu na pripravovaný produkt vo fáze, kedy je možné ešte produkt na základe ich hodnotenia prispôsobiť. Preto by to nemali byť zákazníci, ktorí prejavia záujem o produkt už v jeho finálnej podobe."
            }
        }
    },
    3:
    {
        id: 1,
        questionId: 3,
        questionText:
            "Označ všetkých zákazníkov spoločnosti Čistý zúbok. (viacero správnych odpovedí)",
        answers:
        {
            1: {
                answerId: 1,
                answerText: "Zamestnaní rodičia",
                isCorrect: true,
                explanation: "Aj napriek tomu, že nie sú primárným zákazníkom eko kefiek, sú za produkt ochotní zaplatiť."
            },
            2: {
                answerId: 2,
                answerText: "Environmentálne zodpovední ľudia",
                isCorrect: true,
                explanation: "Aj napriek tomu, že nie sú primárným zákazníkom eko kefiek, sú za produkt ochotní zaplatiť."
            },
            3: {
                answerId: 3,
                answerText: "Deti zamestnaných rodičov",
                isCorrect: false,
                explanation: "Deti sú používateľmi produktu, nie však zákazníkmi. Používateľ produkt používa, ale nie je schopný či ochotný zaň platiť. Zákazníci sú ich rodičia, ktorí za produkt zaplatili."
            }
        }
    }
};
*/

const ScrollableTabsButtonAuto = (props) => {
    const { idCaseStudy, idStage } = props;


    const classes = useStyles();
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [reachedQuestion, setReachedQuestion] = React.useState(0);
    const [currentCategory, setCurrentCategory] = React.useState(idStage - 1);
    const [reachedCategory, setReachedCategory] = React.useState(0);
    
    const caseStudyStages = props.data.caseStudyStages;
    const caseStudyStage = caseStudyStages[currentCategory + 1];


    console.log('dataaaa', caseStudyStage);
    console.log('current category', currentCategory);
    useEffect(() => {
        console.log('v use effect', currentCategory);
        props.actionGetCaseStudyStage(idCaseStudy, currentCategory + 1);
        console.log('alll stages', caseStudyStages);
    },
        [currentCategory]
    );


    const handleChange = (event, newValue) => {
        if (newValue <= reachedQuestion) {
            setCurrentQuestion(newValue);
        }
    };

    const goToNextQuestion = (questions) => {
        if (currentQuestion < Object.keys(questions).length - 1) {
            setReachedQuestion(currentQuestion + 1);
            setCurrentQuestion(currentQuestion + 1);
        } else {
            console.log('ukoncenie kategorie', currentCategory);
            goToNextCategory(questions)
            //zmen kategoriu
        }
    };

    const goToNextCategory = () => {
        if (currentCategory <= 9) {
            setReachedCategory(currentCategory + 1);
            setCurrentCategory(currentCategory + 1);
            setCurrentQuestion(0);
            setReachedQuestion(0);
        }

    };

    const renderTab = (question, idQuestion) => {
        return (
            <Tab label={"Otázka " + String(idQuestion)} {...a11yProps(question.id)} />
        )

    };
    if (caseStudyStage) {
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
                            {/*Object.keys(questions).map((questionId) => renderTab(questions[questionId].questionText, questionId))*/}
                            {Object.keys(caseStudyStage).map((idQuestion) => renderTab(caseStudyStage[idQuestion].question_text, idQuestion))}
                        </Tabs>
                    </AppBar>
                </div>
                {/*Object.keys(questions).map((questionId, index) => (
                    <TabPanel value={currentQuestion} index={index}>
                        <CompanyLCquestion text={questions[questionId].questionText} />
                        <AnswerButtons
                            answers={questions[questionId].answers}
                            goToNextQuestion={() => {
                                goToNextQuestion(questions)
                            }}
                        />

                    </TabPanel>
                        ))*/}
                {Object.keys(caseStudyStage).sort().map((idOrder, index) => (
                    <TabPanel value={currentQuestion} index={index}>
                        <CompanyLCquestion text={caseStudyStage[idOrder].question_text} />
                        <AnswerButtons
                            choices={caseStudyStage[idOrder].choices}
                            goToNextQuestion={() => {
                                goToNextQuestion(caseStudyStage);
                            }}
                        />

                    </TabPanel>
                ))}

            </div>
        );
    }
    else {
        return null
    }
};


const mapStateToProps = (state, props) => {
    console.log('11111111111111', props);
    const { idCaseStudy, idStage } = props
    const data = {
        caseStudyStages: getCaseStudyStages(state, idCaseStudy, idStage)
    };
    return { data };
};

const mapDispatchToProps = dispatch => ({
    actionGetCaseStudyStage: bindActionCreators(actionGetCaseStudyStage, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScrollableTabsButtonAuto);

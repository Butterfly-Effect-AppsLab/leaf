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
        questionText: "Akého zákazníka si podľa teba vytipovala spoločnosť Čistý zúbok?",
        answers: [
            {
                answerText: "Každého človeka, ktorý si umýva zuby",
                isCorrect: false,
                explanation: "Pri tvorbe produktu je veľmi dôležité si zákazníka čo najviac vyšpecifikovať, pretože pre príliš všebecného zákazníka je veľmi náročné prispôsobiť produkt, dizajn či marketing."
            },
            {
                answerText: "Eco zodpovedných ľudí",
                isCorrect: false,
                explanation: "Eko zodpovední ľudia sú tiež zákazníkmi Čistého zúbka. Na trhu však už existuje viacero alternatív eko zubných kefiek. Odlišnosťou Čistého zúbka je predplatné. Skús vybrať zákazníka, pre ktorého je dôležitá včasná automatická výmena kefiek."
            },
            {
                answerText: "Rodiny",
                isCorrect: true,
                explanation: "Pracujúci rodičia v záplave svojich povinností zabúdajú sledovať stav zubných kefiek členov svojej rodiny, preto pravidlená automatická zásielka eko zubných kefiek je pre nich skvelým riešením."
            }
        ]


    },
    {
        id: 1,
        questionId: 2,
        questionText: "Koho si Čistý zúbok zvolil ako prvých \"skúšobných\" zákazníkov?",
        answers: [
            {
                answerText: "Náhodných prvých zákazníkov, ktorí si produkt objednali",
                isCorrect: false,
                explanation: "Prvých zákazníkov, tzv. \"lastovičky\" je potrebné si vybrať vopred. Musia sa zhodovať s vytipovaným zákazníkom, pre ktorého je produkt prispôsobovaný."
            }, {
                answerText: "Zákazníkov z mesta, kde firma vznikla",
                isCorrect: true,
                explanation: "Lastovičky, resp. prví zákazníci by mali byť ľahko dostupní kvôli čo najnižším nákladom na marketing a tiež totožní s typom cieľového zákazníka. Sú to zákazníci, ktorí poskytujú hodnotenie produktu pred oficiálnym spustením predaja."
            },
            {
                answerText: "Cielene vybraných zákazníkov, ktorí prejavili záujem o predplatenú službu",
                isCorrect: false,
                explanation: "Lastovičky, ako voláme prvých zákazníkov, dávajú spätnú väzbu na pripravovaný produkt vo fáze, kedy je možné ešte produkt na základe ich hodnotenia prispôsobiť. Preto by to nemali byť zákazníci, ktorí prejavia záujem o produkt už v jeho finálnej podobe."
            }
        ]
    },
    {
        id: 1,
        questionId: 3,
        questionText: "Označ všetkých zákazníkov spoločnosti Čistý zúbok. (viacero správnych odpovedí)",
        answers: [
            {
                answerText: "Zamestnaní rodičia",
                isCorrect: true,
                explanation: "Aj napriek tomu, že nie sú primárným zákazníkom eko kefiek, sú za produkt ochotní zaplatiť."
            },
            {
                answerText: "Environmentálne zodpovední ľudia",
                isCorrect: true,
                explanation: "Aj napriek tomu, že nie sú primárným zákazníkom eko kefiek, sú za produkt ochotní zaplatiť."
            },
            {
                answerText: "Deti zamestnaných rodičov",
                isCorrect: false,
                explanation: "Deti sú používateľmi produktu, nie však zákazníkmi. Používateľ produkt používa, ale nie je schopný či ochotný zaň platiť. Zákazníci sú ich rodičia, ktorí za produkt zaplatili."
            }
        ]
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
                    <AnswerButtons answers={question.answers}/>
                </TabPanel>
            ))}
        </div>
    );
}
import Footer from "./Footer";
import React, {useEffect} from "react";
import CompanyHeader from "./CompanyHeader";
import * as ProjectColors from "../utils/colors";
import BackgroundProjectWhite from "../icons/background_project_white.svg";
import BackgroundProjectOrange from "../icons/background_projekt_orange.svg";
import history from "../utils/history";


const Layout = ({children, history}) => {
    const [showHeader, setShowHeader] = React.useState(-1);
    const [textColor, setTextColor] = React.useState("");
    const [headerColor, setHeaderColor] = React.useState("");
    const [showHint, setShowHint] = React.useState(false);
    const [backgroundColor, setBackgroundColor] = React.useState(ProjectColors.lightGray());
    const [backgroundImage, setBackgroundImage] = React.useState("initial");
    const [marginTop, setMarginTop] = React.useState(0);
    const [marginBottom, setMarginBottom] = React.useState(0);
    const [text, setText] = React.useState("BLABLABLA");

    useEffect(() => {
        const processPathName = (pathname, state) => {
            switch (pathname) {
                case "/LcKategorie":   //Firma LC
                    const {type} = state;
                    switch (type) {
                        case "firm":
                            setShowHeader(0);
                            setHeaderColor(ProjectColors.yellow());
                            setTextColor(ProjectColors.white());
                            setBackgroundColor(ProjectColors.yellow());
                            setMarginTop(80);
                            setMarginBottom(60);
                            break;
                        case "project":
                            setShowHeader(0);
                            setHeaderColor(ProjectColors.orange());
                            setTextColor(ProjectColors.white());
                            setBackgroundColor(ProjectColors.orange());
                            setBackgroundImage(`url(${BackgroundProjectWhite})`);
                            setMarginTop(80);
                            setMarginBottom(60);
                            break;
                        default:
                            break;
                    }
                    break;
                case "/ProjectInfo":    //Projekt vyplnanie
                    setShowHeader(1);
                    setHeaderColor(ProjectColors.orange());
                    setTextColor(ProjectColors.white());
                    setBackgroundColor(ProjectColors.orange());
                    setBackgroundImage(`url(${BackgroundProjectWhite})`);
                    setMarginTop(80);
                    setMarginBottom(60);
                    break;
                case "/ProjektLcKategorie": //Projekt LC
                    setShowHeader(2);
                    setHeaderColor(ProjectColors.orange());
                    setTextColor(ProjectColors.white());
                    setBackgroundColor(ProjectColors.orange());
                    setBackgroundImage(`url(${BackgroundProjectOrange})`);
                    setMarginTop(80);
                    setMarginBottom(60);
                    break;
                case "/FirmaInfo": //Firma Description
                    setText(state.name);
                    setShowHeader(3);
                    setHeaderColor(ProjectColors.yellow());
                    setTextColor(ProjectColors.white());
                    setBackgroundColor(ProjectColors.yellow());
                    setMarginTop(80);
                    setMarginBottom(60);
                    break;
                case "/LCFirma":        //Firma Otazky
                    setText(state.name);
                    setShowHeader(4);
                    setHeaderColor(ProjectColors.lightGray());
                    setTextColor(ProjectColors.yellow());
                    setBackgroundColor(ProjectColors.lightGray());
                    setMarginTop(80);
                    setMarginBottom(60);
                    break;
                case "/Otazky":         //Projekt Otazky
                    setShowHeader(5);
                    setHeaderColor(ProjectColors.lightGray());
                    setTextColor(ProjectColors.orange());
                    setBackgroundColor(ProjectColors.lightGray());
                    setBackgroundImage(`url(${BackgroundProjectOrange})`);
                    setShowHint(true);
                    setMarginTop(80);
                    setMarginBottom(60);
                    break;
                case "/ToDo":
                    setShowHeader(6);  //Projek Tuducka
                    setHeaderColor(ProjectColors.lightGray());
                    setTextColor(ProjectColors.orange());
                    setBackgroundColor(ProjectColors.lightGray());
                    setBackgroundImage(`url(${BackgroundProjectOrange})`);
                    setShowHint(true);
                    setMarginTop(80);
                    setMarginBottom(60);
                    break;
                case "/Firmy":
                    setShowHeader(-1);
                    setBackgroundColor(ProjectColors.lightGray());
                    setBackgroundImage("initial");
                    setMarginTop(0);
                    setMarginBottom(60);
                    break;
                case "/Profil":
                    setShowHeader(-1);
                    setBackgroundColor(ProjectColors.lightGray());
                    setBackgroundImage("initial");
                    setMarginTop(0);
                    setMarginBottom(60);
                    break;
                default:
                    setShowHeader(-1);
                    break;
            }
        };

        if (history) {
            processPathName(history.location.pathname);
            history.listen((location) => {
                processPathName(location.pathname, location.state);
                console.log(location.state)
            });
        }

    }, [history]);

    return (
        <div
            id="Hlavny"
            style={{
                width: "100%",
                height: '100%',
                position: "fixed",
                overflow: "auto",
                backgroundColor: backgroundColor,
                backgroundImage: backgroundImage,
                marginTop: marginTop,
                marginBottom: marginBottom,
            }}
        >
            <CompanyHeader text={text} showHeader={showHeader} textColor={textColor} headerColor={headerColor} showHint={showHint}
                           history={history}/>
            {children}
            <Footer history={history}/>
        </div>
    )
};

export default Layout;
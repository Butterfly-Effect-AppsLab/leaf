import React from "react";
import AnswerButton from "../components/AnswerButton";
import Typography from '@material-ui/core/Typography';

const FirmQuestionsPage = () => {
    return (<div>
                <Typography variant="h6" align="center">Akého zákazníka si podľa teba vytipovala spoločnosť Toothfresh?</Typography>
                <AnswerButton />
            </div>
    )
};

export default FirmQuestionsPage;
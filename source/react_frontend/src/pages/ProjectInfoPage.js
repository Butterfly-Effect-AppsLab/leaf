import React from "react";
import MultilineTextField from '../components/MultilineTextField';
import Button from '@material-ui/core/Button';


const ProjectInfo = () => {
    const [isDisabled, setIsDisabled] = React.useState(false);
    
    const handleClick = event => {
        setIsDisabled(!isDisabled);
      };


    return (
        <div>
            <h3 align="center" margin={20}>
                Zamysli sa nad tým, aký nápad chceš rozvíjať a vypíš si základné parametre, 
                ktoré tento nápad zakategorizujú.
            </h3>

            <br />
            <MultilineTextField field_name='Nazov projektu' row_num={2}/>
            <br />
            
            <h3 align="center" margin={20}>
                Aky typ napadu chces rozvijat?
            </h3>

            <div align="center">
                <Button 
                    id='button-service' 
                    disabled={isDisabled}
                    onClick={handleClick}
                >Sluzba</Button>
                
                <Button 
                    id='button-product' 
                    disabled={!isDisabled}
                    onClick={handleClick}>Produkt</Button>
            </div>

            <h3 align="center">
                O čom bude tvoj projekt? Popíš pár vetami, 
                čomu sa chceš vo svojom projektu venovať 
                a prečo si sa rozhodol práve pre tento?
            </h3>
            
            <br />
            <MultilineTextField field_name='Popis projektu' row_num={6}/>
            <br />
            

        </div>
    )
};

export default ProjectInfo;
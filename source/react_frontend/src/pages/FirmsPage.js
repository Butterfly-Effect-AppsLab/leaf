import Card from "../components/Card";
import AddProject from "../components/AddProject";
import React from "react";
import Typography from "@material-ui/core/Typography";

const FirmsPage = () => {
    return (
        <div
             style={{
                 background: "#F9FAFB",
                 width: '100%',
                 marginBottom: "60px"
             }}
        >
            <body style={{color: "#7C7C7C"}}>
                <h1 style={{paddingTop: 20, paddingRight: 10, paddingLeft: 10,  margin: 0}}>Domov</h1>
                <br />
                <b style={{paddingRight: 10, paddingLeft: 10}}>Vyber si firmu</b>
                <Typography style={{paddingRight: 10, paddingLeft: 10}}>Nauč sa na jednej z firiem, ako správne vytvoriť biznis plán a zisti, čo je dôležité pri začiatkoch biznisu</Typography>
                <Card />
                <br />
                <b style={{paddingRight: 10, paddingLeft: 10}}>Moje projekty</b>
                <Typography style={{paddingRight: 10, paddingLeft: 10}}>Rozvíjaj svoje vlastné nápady a projekt</Typography>
                <AddProject/>
            </body>
        </div>)
};

export default FirmsPage;
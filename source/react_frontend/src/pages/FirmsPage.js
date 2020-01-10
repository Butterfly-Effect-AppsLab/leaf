import Card from "../components/Card";
import AddProject from "../components/AddProject";
import React from "react";
import Typography from "@material-ui/core/Typography";

const FirmsPage = () => {
    return (
        <div
             style={{
                 paddingLeft: "10px",
                 paddingRight: "10px",
                 background: "#E5E5E5",
                 height: '100%',
                 width: '100%',
             }}
        >
            <body>
                <h1 style={{paddingTop: 20, margin: 0}}>Domov</h1>
                <br />
                <b>Vyber si firmu</b>
                <Typography>Nauč sa na jednej z firiem, ako správne vytvoriť biznis plán a zisti, čo je dôležité pri začiatkoch biznisu</Typography>
                <Card />
                <br />
                <b>Moje projekty</b>
                <Typography>Rozvíjaj svoje vlastné nápady a projekt</Typography>
                <AddProject/>
            </body>
        </div>)
};

export default FirmsPage;
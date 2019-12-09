import React from "react";
import Card from "../components/Card";
import AddProject from "../components/AddProject"

const FirmsPage = () => {
    return (
        <div>
            <body>
                <b>Vyber si firmu</b>
                <Card />
                <br />
                <b>Moje projekty</b>
                <AddProject/>
            </body>
        </div>)
};

export default FirmsPage;
import React from "react";
import CategoryCard from "../components/CategoryCard";
import FirmaHeader from "../components/FirmaHeader";
import Backround_cisty_zubok from "../icons/backround_cisty_zubok.svg";


const LcCategoriesPage = () => {
    return (
        <div
            style={{
                marginTop: '70px',
                marginBottom: '25px',
                background: "#EFCA59",
                backgroundImage: `url(${Backround_cisty_zubok})`,
            }}
        >
            <body >
                <FirmaHeader />
                <CategoryCard />
                <br />
            </body>
        </div>)
};

export default LcCategoriesPage;
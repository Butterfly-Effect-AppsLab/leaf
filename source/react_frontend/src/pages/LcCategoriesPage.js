import React from "react";
import CategoryCard from "../components/CategoryCard";
import Backround_cisty_zubok from "../icons/backround_cisty_zubok.svg";


const LcCategoriesPage = () => {
    return (
        <div
            style={{
                marginTop: '80px',
                marginBottom: '60px',
                background: "#EFCA59",
                backgroundImage: `url(${Backround_cisty_zubok})`,
            }}
        >
            <body >
                <CategoryCard />
                <br />
            </body>
        </div>)
};

export default LcCategoriesPage;
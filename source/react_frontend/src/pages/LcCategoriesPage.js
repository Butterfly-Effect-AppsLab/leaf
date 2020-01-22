import React from "react";
import CategoryCard from "../components/CategoryCard";
import Backround_cisty_zubok from "../icons/backround_cisty_zubok.svg";
import * as ProjectColors from "../utils/colors";

const LcCategoriesPage = () => {
    return (
        <div
            style={{
                marginTop: '80px',
                marginBottom: '60px',
                background: ProjectColors.yellow(),
                backgroundImage: `url(${Backround_cisty_zubok})`,
                height: "100%",
            }}
        >
                <CategoryCard />
                <br />
        </div>)
};

export default LcCategoriesPage;
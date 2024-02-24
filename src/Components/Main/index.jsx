import React from "react";
import './main.css';
import Add from "./Add";
import Information from "./Information";
import Results from "./Restults";

const Main = () => {
    return(
        <main className="main">
            <Add />
            <Information />
            <Results />
        </main>
    )
}

export default Main;
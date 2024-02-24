import React from "react";
import './results.css';
import plata from '../../../assets/pesos.png';

const Results = () => {
    return(
        <article className="results">
            <img  className="NoInfo" src={plata} alt="Bills" />
        </article>
    )
}

export default Results;
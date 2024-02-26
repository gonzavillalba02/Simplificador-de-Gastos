import React from "react";
import './results.css';

const Results = ({ objDeudas, ligth }) => {

    const formatNumber = (num) => {
        if (num % 1 != 0) {
            return num.toFixed(2);
        } else {
            return num;
        }
    }
    
    return (
        <article id="results" className={"results " + (!(Object.keys(objDeudas).length === 0) && "results-border")}>
            {Object.keys(objDeudas).length === 0 ? (
                <></>
            ) : (
                objDeudas.map((obj, index) => {
                    const name = Object.keys(obj)[0]; // el nombre del deudor
                    const deudas = Object.values(obj)[0];

                    const aQuien = Object.keys(deudas); // array con a quien le debe
                    const cantidades = Object.values(deudas); // array con cuando le debe

                    const deudasJSX = aQuien.map((deudor, index) => (
                        <p className={"parrafo-result " + (ligth && "parrafo-result-li")} key={index}>
                            {name} owes <p className="parrafo-result-deudor">{deudor}</p> <p className={"parrafo-result-cant " + (ligth && "parrafo-result-cant-li")}>${formatNumber(cantidades[index])}</p>
                        </p>
                    ));

                    return deudasJSX;
                })
            )}
        </article>
    );
}

export default Results;

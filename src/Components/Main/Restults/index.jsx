import React from "react";
import './results.css';
import plata from '../../../assets/pesos.png';

const Results = ({ objDeudas }) => {

    return (
        <article className={"results " + (!(Object.keys(objDeudas).length === 0) && "results-border")}>
            {Object.keys(objDeudas).length === 0 ? (
                <></>
            ) : (
                objDeudas.map((obj, index) => {
                    const name = Object.keys(obj)[0]; // el nombre del deudor
                    const deudas = Object.values(obj)[0];

                    const aQuien = Object.keys(deudas); // array con a quien le debe
                    const cantidades = Object.values(deudas); // array con cuando le debe

                    const deudasJSX = aQuien.map((deudor, index) => (
                        <p className="parrafo-result" key={index}>
                            {name} debe <p className="parrafo-result-cant">${cantidades[index].toFixed(2)}</p> a <p className="parrafo-result-deudor">{deudor}</p>
                        </p>
                    ));

                    return deudasJSX;
                })
            )}
        </article>
    );
}

export default Results;

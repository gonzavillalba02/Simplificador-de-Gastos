import React from "react";
import './information.css';
import NoInfo from "./NoInfo";
import YesInfo from "./YesInfo";

const Information = ({data, info, removeFromData, setObjDeudas, ligth}) => {

    const calcular = (data) => {

        
        let deudas_simplificadas = [];
        let objeto = {};

        let cant_personas = data.length;
        let pagos = {};
        let personas = [];
        let totalPagado = 0;
        data.map((obj) => {
            pagos[obj.name] = parseFloat(obj.amount);
            totalPagado += parseFloat(obj.amount);
            personas.push(obj.name);
        });
        
        function calcularDeudas(pagos, personas, totalPagado) {
            const numPersonas = personas.length;
            const promedio = totalPagado / numPersonas;
            let deudas = {};
        
            for (let persona of personas) {
                if (pagos[persona] < promedio) {
                    deudas[persona] = promedio - pagos[persona];
                }
            }
        
            for (let per in pagos) {
                if (pagos[per] >= promedio){
                    pagos[per] = pagos[per] - promedio
                } else if (pagos[per] != 0 && deudas[per] == (promedio - pagos[per])) {
                    pagos[per] = 0;
                }
            }
        
            for (let deudor in deudas) {
                let aQuienDebe = [];
                let cuantoDebe = [];
                for (let persona of personas){
                    if (pagos[persona] != 0) {
                        if (deudas[deudor] <= pagos[persona]) {
                            pagos[persona] = pagos[persona] - deudas[deudor];
                            cuantoDebe.push(deudas[deudor]);
                            deudas[deudor] = 0;
                            aQuienDebe.push(persona);
                        } else {
                            deudas[deudor] = deudas[deudor] - pagos[persona];
                            cuantoDebe.push(pagos[persona]);
                            pagos[persona] = 0;
                            aQuienDebe.push(persona);
                        }
                    }
                    if (deudas[deudor] == 0) {
                        break;
                    }
                }
                let arreglo = {};
                for (let i = 0; i < aQuienDebe.length; i++) {
                    arreglo[aQuienDebe[i]] = cuantoDebe[i];
                }
                objeto[deudor] = arreglo;
                deudas_simplificadas.push(objeto);
                objeto = {};
            }
            return deudas_simplificadas;
        }

        return calcularDeudas(pagos, personas, totalPagado);
    }

    const handleScrollToResults = () => {
        const resultsElement = document.getElementById('results');
        if (resultsElement) {
            resultsElement.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <article className="information">
            {(info && data.length > 0) ?
            <>{data.map((obj) => {
                return <YesInfo key={obj.id} id={obj.id} name={obj.name} amount={obj.amount} removeFromData={removeFromData} ligth={ligth}/>
            })}
            <div className="information-container-buttons">
                <button className="information-button" onClick={() => {setObjDeudas(calcular(data)); handleScrollToResults();}}>
                    Results
                </button>
            </div>
            </>
            : 
            <NoInfo ligth={ligth} />}
        </article>
    )
}

export default Information;
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './main.css';
import Add from "./Add";
import Information from "./Information";
import Results from "./Restults";

const Main = () => {

    const [data, setData] = useState([]);

    const pushData = (name, amount) => {
        const newData = [
            ...data,
            {
                id: uuidv4(),
                name: name,
                amount: amount
            }
        ];
        setData(newData);
    }

    const [info, setInfo] = useState(false);

    const removeFromData = (id) => {
        const newData = data.filter(item => item.id !== id);
        setData(newData);
    };

    const [objDeudas, setObjDeudas] = useState({});

    return(
        <main className="main">
            <Add data={data} pushData={pushData} setInfo={setInfo} />
            <Information data={data} info={info} setInfo={setInfo} removeFromData={removeFromData} setObjDeudas={setObjDeudas} />
            <Results objDeudas={objDeudas} />
        </main>
    )
}

export default Main;
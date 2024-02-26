import React, { useState } from "react";
import { TiMinus, TiPlus } from "react-icons/ti";
import './add.css';

const Add = ({data, pushData, info, setInfo}) => {

    const [add, setAdd] = useState(false);

    const handleAdd = () =>{
        setAdd(!add);
    }

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    const [used, setUsed] = useState(false);

    return (
        <article className={"add" + " " + (add ? "add-desplegado" : "add-plegado")}>
            <div className="add-header">
                <h5>Add Friends</h5>
                <button className={add ? "minus" : "plus"}
                onClick={() => {
                    setUsed(false);
                    handleAdd();
                    }}>
                    <p className="add-header-button-p">{add ?  <TiMinus /> : <TiPlus />}</p>
                </button>
            </div>
            <form className={"add-form" + " " + (add ? "view" : "hidden")}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Enter name" value={name} 
                onChange={(e) => {
                    setUsed(false);
                    setName(e.target.value);
                    }}/>

                <label htmlFor="howMuch">How much pay?</label>
                <input type="text" name="howMuch" placeholder="Enter amount" value={amount} 
                onChange={ (e) => {
                    setUsed(false);
                    const inputValue = e.target.value;
                    const numbersOnly = /^\d*$/;

                    if (numbersOnly.test(inputValue)) {
                        setAmount(inputValue);
                    }
                }}
                />
                <div className="add-from-msj-button">

                    <p className={used ? "" : "msj-hidden"} >This name has already been used</p>

                    <button onClick={(e) => {
                            e.preventDefault();
                            let band = true;
                            if (data.length != 0) {
                                for (let obj of data) {
                                    if (obj.name === name) {
                                        band = false;
                                    }
                                }
                            }
                            if (band && name !== "" && amount !== "") {
                                pushData(name, amount);
                                setInfo(true);
                                setName("");
                                setAmount("");
                                setUsed(false);
                            } else {
                                if (name !== "" && amount !== ""){
                                    setUsed(true);
                                }
                            }
                        }}>
                        Add
                    </button>
                </div>
            </form>
        </article>
    )
}

export default Add;
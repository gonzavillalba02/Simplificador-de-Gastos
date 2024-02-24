import React, { useState } from "react";
import './add.css';

const Add = () => {

    const [add, setAdd] = useState(false);

    const handleAdd = () =>{
        setAdd(!add);
    }

    return (
        <article className={"add" + " " + (add ? "add-desplegado" : "")}>
            <div className="add-header">
                <h5>Add Friends</h5>
                <button onClick={() => handleAdd()}>
                    +
                </button>
            </div>
            <form className={"add-form" + " " + (add ? "view" : "hidden")}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Enter name"/>

                <label htmlFor="howMuch">How much pay?</label>
                <input type="text" name="howMuch" placeholder="Enter amount"/>

                <button>
                    Accept
                </button>
            </form>
        </article>
    )
}

export default Add;
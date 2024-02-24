import React from "react";
import './yesinfo.css';
import { FaTrashCan } from "react-icons/fa6";

const YesInfo = ({id, name, amount, removeFromData}) => {
    return(
        <>
        <div className="info-container">
            <div className="info-container-div">
                <p>{name}</p>
                <FaTrashCan className="trash"
                onClick={()=>removeFromData(id)}/> 
            </div>
            <p>${amount}</p>
        </div>
        </>
    )
}

export default YesInfo;
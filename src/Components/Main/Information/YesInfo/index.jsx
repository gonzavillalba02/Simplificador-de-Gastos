import React from "react";
import './yesinfo.css';
import { FaTrashCan } from "react-icons/fa6";

const YesInfo = ({id, name, amount, removeFromData, ligth}) => {
    return(
        <>
        <div className={"info-container " + (ligth && "info-container-li")}>
            <div className="info-container-div">
                <p>{name}</p>
                <FaTrashCan className={"trash " + (ligth && "trash-li")}
                onClick={()=>removeFromData(id)}/> 
            </div>
            <p>${amount}</p>
        </div>
        </>
    )
}

export default YesInfo;
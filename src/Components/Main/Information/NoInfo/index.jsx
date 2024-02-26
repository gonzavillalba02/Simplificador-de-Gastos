import React from "react";
import './noinfo.css';
import imagen from '../../../../assets/Noinfo.svg';

const NoInfo = ({ligth}) => {
    return(
        <div className={"Noinfo " + (ligth && "Noinfo-li")}>
            <img src={imagen} alt="No information" />
            <p>There is no information yet</p>
        </div>
    )
}

export default NoInfo;
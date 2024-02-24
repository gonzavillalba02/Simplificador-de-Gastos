import React from "react";
import './noinfo.css';
import imagen from '../../../../assets/Noinfo.svg';

const NoInfo = () => {
    return(
        <div className="Noinfo">
            <img src={imagen} alt="No information" />
            <p>There is no information yet</p>
        </div>
    )
}

export default NoInfo;
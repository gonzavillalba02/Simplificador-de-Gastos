import React from "react";
import './info.css';
import { IoReturnDownBackOutline } from "react-icons/io5";

const Info = ({setInfo, ligth}) => {
    return(
        <div className={"info-header-container " + (ligth && "info-header-container-li")}>
            <ul>
                <li>Splitify is a website to simplify debts between friends, acquaintances or family.</li>
                <li>First, by clicking on <span><p className={"plusbutton " + (ligth && "plusbutton-li")}>+</p></span>, add the names of those who participated in the expense along with the amount each person spent.</li>
                <li>Then you can check the data entered and if you consider it correct, press on <div className="results-button-container"><button>Results</button></div> and that's it! </li>
                <li>You will see the most optimal way to pay off debts.</li>
            </ul>
            <IoReturnDownBackOutline className="return" onClick={()=> setInfo(false)}/>
        </div>
    )
}

export default Info;
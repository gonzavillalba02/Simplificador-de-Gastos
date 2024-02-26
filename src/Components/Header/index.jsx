import React, { useState } from "react";
import './header.css';
import Icono from "../../assets/icon.png";
import { IoSunny } from "react-icons/io5";
import { LuMoon } from "react-icons/lu";
import { FaArrowUpLong } from "react-icons/fa6";
import Info from "./Info";

const Header = ({ligth, handleLigth}) => {

    const [info, setInfo] = useState(false);

    const [start, setStart] = useState(false);

    const handleStart = () => {
        setStart(true);
        setTimeout(() => {
            setStart(false);
        }, 1500);
    }

    return(
        <header className={"header " + (info && "header-info")}>
            <div className="header-container">
                <div className="header-container_flex">
                    <div className={"header-container_flex-titulos " + (ligth && "header-container_flex-titulos-li")}>
                        <h1>Splitify</h1>
                        <h3>DO <p className={"your " + (ligth && "your-li")}>YOUR</p> <p className="expenses">EXPENSES</p> WELL</h3>
                    </div>
                    <img src={Icono} alt="Icono" />
                </div>
                <div className="header-buttons">
                    <button onClick={() => setInfo(true)}>
                        How to use
                    </button>
                    {ligth ?
                    <IoSunny className="colorToggle" onClick={() => handleLigth()}/>
                    :
                    <LuMoon className="colorToggle" onClick={() => handleLigth()}/>
                    }
                    <button onClick={()=>handleStart()}>
                        Start now
                    </button>
                </div>
                <FaArrowUpLong className={"arrow " + (start && "arrowyes")}/>
            </div>
            <Info setInfo={setInfo} ligth={ligth}/>
        </header>
    )
}

export default Header;
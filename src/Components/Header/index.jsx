import React from "react";
import './header.css';
import Icono from "../../assets/icon.png";
import { IoSunny } from "react-icons/io5";
import { LuMoon } from "react-icons/lu";

const Header = ({ligth, handleLigth}) => {

    return(
        <header className="header">
            <div className="header-container_flex">
                <div className={"header-container_flex-titulos " + (ligth && "header-container_flex-titulos-li")}>
                    <h1>Splitify</h1>
                    <h3>DO <p className={"your " + (ligth && "your-li")}>YOUR</p> <p className="expenses">EXPENSES</p> WELL</h3>
                </div>
                <img src={Icono} alt="Icono" />
            </div>
            <div className="header-buttons">
                <button>
                    How to use
                </button>
                {ligth ?
                <IoSunny className="colorToggle" onClick={() => handleLigth()}/>
                :
                <LuMoon className="colorToggle" onClick={() => handleLigth()}/>
                }
                <button>
                    Start now
                </button>
            </div>
        </header>
    )
}

export default Header;
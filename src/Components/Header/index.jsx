import React from "react";
import './header.css';
import Icono from "../../assets/icon.png";

const Header = () => {
    return(
        <header className="header">
            <div className="header-container_flex">
                <div className="header-container_flex-titulos">
                    <h1>Splitify</h1>
                    <h3>DO <p className="your">YOUR</p> <p className="expenses">EXPENSES</p> WELL</h3>
                </div>
                <img src={Icono} alt="Icono" />
            </div>
            <div className="header-buttons">
                <button>
                    How to use
                </button>
                <button>
                    Start now
                </button>
            </div>
        </header>
    )
}

export default Header;
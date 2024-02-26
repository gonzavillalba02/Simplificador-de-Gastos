import React from "react";
import Icono from '../../assets/Icono.png';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <p>Made By Gonzalo Emiliano Villalba</p>
            <img src={Icono} alt="Icono" />
        </footer>
    )
}

export default Footer;
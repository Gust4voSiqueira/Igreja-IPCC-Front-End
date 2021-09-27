import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import Logo from "../../images/logo.jpeg";

import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    const [main, setMain] = useState(false);
    const handleMainDesktop = useCallback(() => {
        if (main === false) {
            document.getElementById("nav-mobile").style.left = "-0%";
            if (window.location.href === "http://localhost:3000/Location") {
                document.getElementById("map-location").style.display = "none";
                document.getElementById("image").style.display = "block";
            }
        } else {
            if (window.location.href === "http://localhost:3000/Location") {
                document.getElementById("map-location").style.display = "block";
                document.getElementById("image").style.display = "none";
            }
            document.getElementById("nav-mobile").style.left = "-50%";
        }
    }, [main]);
    return (
        <>
            <div id="header-container">
                <img src={Logo} alt="Logo" />

                <div id="menu-mobile" onClick={() => setMain(!main)}>
                    <input type="checkbox" name="" id="check" />
                    <label htmlFor="check"></label>
                    <span id='main-mobile-barra'></span>
            </div>
            
                <div id="title-nav">
                    <h1>Mais que uma Igreja, uma Família!</h1>

                    <nav id="nav-desktop">
                        <Link to="/">
                            <li>Início</li>
                        </Link>

                        <Link to="/Events">
                            <li>Eventos</li>
                        </Link>
                        <Link to="/ECD">
                            <li>ECD</li>
                        </Link>
                        <Link to="/About">
                            <li>Sobre</li>
                        </Link>

                        <Link to="/Location">
                            <li>Localização</li>
                        </Link>
                    </nav>

                     
                    <nav id="nav-mobile">
                        <h2 id="main-title">Menu</h2>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <li>Início</li>
                        </Link>

                        <Link to="/Events" style={{ textDecoration: "none" }}>
                            <li>Eventos</li>
                        </Link>

                        <Link to="/ECD" style={{ textDecoration: "none" }}>
                            <li>ECD</li>
                        </Link>

                        <Link to="/About" style={{ textDecoration: "none" }}>
                            <li>Sobre</li>
                        </Link>

                        <Link to="/Location" style={{ textDecoration: "none" }}>
                            <li>Localização</li>
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;

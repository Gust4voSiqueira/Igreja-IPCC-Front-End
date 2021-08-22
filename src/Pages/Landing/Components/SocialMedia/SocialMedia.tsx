import React from "react";
import "./SocialMedia.css";

import SocialMediaImage from "../../../../images/redes sociais.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
    return (
        <>
            <div id="socialMedia-container">
                <img src={SocialMediaImage} alt="" />
                <div>
                    <h2 className="title">Nos Siga nas Redes Sociais!</h2>
                    <nav>
                        <li style={{ background: "#FF0000" }}>
                            <a href="https://www.instagram.com/igreja_ipcc/">
                                <FaInstagram className="iconsSocialMedia" />
                            </a>
                        </li>
                        <li style={{ background: "#395897" }}>
                            <a href="https://www.facebook.com/igrejaipcc.jinga/">
                                <FaFacebook className="iconsSocialMedia" />
                            </a>
                        </li>
                        <li style={{ background: "#FF0000" }}>
                            <a href="https://www.youtube.com/channel/UCcLoG4hHTsInJJpzCFFVRTw">
                                <FaYoutube className="iconsSocialMedia" />
                            </a>
                        </li>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default SocialMedia;

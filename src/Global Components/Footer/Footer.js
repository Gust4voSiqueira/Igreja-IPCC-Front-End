import React from 'react';
import './Footer.css'

import Logo from '../../images/logo.jpeg'


const Footer = () => {

    return ( 
        <>
        <h2 id="message-end">2021 O ano do recomeço!</h2>
            <div id="footer-container">
                <div>
                <h3>Não deixe de nos deixar a sua sugestão!</h3>
                <textarea  name="textarea"  rows="6" cols="60" />
                <button id='button-suggestion'>Enviar Sugestão</button>
                </div>
                <img src={Logo} alt="" />
                
            
            </div>
        </>
     );
}
 
export default Footer;
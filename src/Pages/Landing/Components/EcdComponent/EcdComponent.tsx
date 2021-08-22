import React from 'react';
import {Link} from 'react-router-dom'
import './EcdComponent.css'
import EcdLogo from '../../../../images/ECD - logo2.png'


const EcdComponent = () => {
    return ( 
        <>
             <div id='EcdComponent-container'>
            <div>
                <h2 className='title'>Acesse á Escola de Capacitação Destino</h2>
                <p>Na Capacitação Destino viveremos experiências poderosas a cada aula. Ensinos baseados na Palavra de Deus transformarão sua vida! Na escola, você assistirá aulas interativas desenvolvidas através de um inovador método de ensino.</p>
                
                    <Link to='/ECD'> <button id='button-acess-ecd'>Saiba Mais</button></Link>
                
            </div>
            <img src={EcdLogo} alt="EcdLogo" />
        </div>
        </>
     );
}
 
export default EcdComponent;
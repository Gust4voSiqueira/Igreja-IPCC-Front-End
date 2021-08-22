import React from 'react';
import './Modules.css'

const Modules = (props) => {
    return ( 
        <>  
        <div id="module" className="models">
          <h2>{props.module}º Módulo</h2>
          <section className="section-models">
            <div>
              <h3>{props.themeOne}</h3>
              <p>
              {props.textOne}
              </p>
            </div>
            <div>
              <h3>{props.themeTwo}</h3>
              <p>
              {props.textTwo}
              </p>
            </div>
            <img src={props.imageOne} alt="" />
            <img src={props.imageTwo} alt="" />
          </section>
        </div>
        </>
     );
}
 
export default Modules;
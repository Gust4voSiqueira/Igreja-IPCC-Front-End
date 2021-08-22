import React from 'react';
import './EventsComponent.css'


const EventsComponent = (props) => {
    return ( 
        <>
            <div id="eventsComponent-container">
                <img src={props.Image} alt="Capa-Events" />
                <p>{props.Name}</p>

                {props.Open ?  <p className='open-event'>Evento Aberto</p> : <button> Inscrever-se </button> }
            </div>
        </>
     );
}
 
export default EventsComponent;
import React from 'react';
import './Events.css'

import Header from '../../Global Components/Header/Header'
import EventsComponent from './Components/EventsComponent'

import Capa from '../../images/capa-events.jpg'
import Capa2 from '../../images/capa-events2.jpg'
import Capa3 from '../../images/capa-events3.jpg'
import Capa4 from '../../images/capa-events3.jpg'
import Capa5 from '../../images/capa-events4.jpg'
import Footer from '../../Global Components/Footer/Footer';

const EventsPage = () => {

    const database = [
        {
            Name: "Conferência Mova-se",
            Image: Capa,
            open: false
        },
        {
            Name: "Encontro com Deus",
            Image: Capa2,
            open: false
        },
        {
            Name: "Inconformados Movement",
            Image: Capa3,
            open: true
        },
        {
            Name: "Culto Online",
            Image: Capa4,
            open: true
        },
        {
            Name: "Culto de Santa Ceia",
            Image: Capa5,
            open: true
        },
    ]

    const HandleRender = () => {
        return database.map((database) => {
            return (
                < EventsComponent Name={database.Name} Image={database.Image} Open={database.open} />
            )
        })
    }

    return (
        <>
            <Header />
            <div id="events-container">
                <h2>Confira aqui os Eventos da nossa Igreja!</h2>
                {HandleRender()}
                <Footer />
            </div>
        </>
    );
}

export default EventsPage;

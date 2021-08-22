import React from 'react';
import Header from '../../Global Components/Header/Header';

import { MapContainer, TileLayer, Marker} from "react-leaflet";
import {iconPerson} from './icon'
import './leaflet.css'
import Footer from '../../Global Components/Footer/Footer';

import Teste from '../../images/map-teste.png'

const LocationPage = () => {
    var location = {
        latitude: -16.1386537,
        longitude: -47.9566588
    
      }

    return ( 
        <>
        < Header />
<img id='image' style={{display:"none"}} src={Teste} alt="" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css" />
        <script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"></script>

        <MapContainer id='map-location' center={[location.latitude,location.longitude]} zoom={15.25}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        <Marker
        position={[location.latitude, location.longitude]}
        icon={ iconPerson } 
        style={{ width:"10px"}}
        >
      </Marker>
         </MapContainer>
        
        < Footer />

        </> 
     );
}
 
export default LocationPage;
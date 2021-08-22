import L from 'leaflet';
import icon from '../../images/location-icon.png';

  const iconPerson = new L.Icon({
    iconUrl: icon,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(40, 50) 
});


export { iconPerson };
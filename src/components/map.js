import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Map = () => {

    return (
      <MapContainer center={[36.353476, 59.501263]} zoom={20} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />  
        <Marker position={[36.353476, 59.501263]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      );
    }
 
export default Map;
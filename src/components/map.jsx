import React from "react";
import { MapContainer, TileLayer} from "react-leaflet";
import Markerposition from "./markerposition";

const Map = ({position}) => {

  const location =([position?.location?.lat,position?.location?.lng]);



  return (
    <MapContainer 
      className="h-screen z-10 pt-16 map"
      center={location}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    <Markerposition address={position} />
    </MapContainer>
  );
};

export default Map;

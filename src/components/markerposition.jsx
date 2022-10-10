import React, { useEffect, useMemo } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

const Markerposition = ({ address }) => {
  const map = useMap();

  const location = useMemo(() => {
    return [address.location.lat, address.location.lng];
  }, [address.location.lat, address.location.lng]);

  useEffect(() => {
    map.flyTo(location, 13, {
      animate: true,
    });
  }, [map, location]);

  return (
    <>
      <Marker position={location}>
        <Popup>
          {address.ip} <br />
          {address.isp}.
        </Popup>
      </Marker>
    </>
  );
};

export default Markerposition;

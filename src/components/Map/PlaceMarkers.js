import React from "react";
import { Marker } from "react-leaflet";
import MarkerPopup from "./MarkerPopup";

const VenueMarkers = (props) => {
  const { places } = props;
  const markers = places.map((venue, i) => (
    <Marker key={i} position={places.geometry}>
      <MarkerPopup data={places} />
    </Marker>
  ));
  return <>{markers}</>;
};

export default VenueMarkers;

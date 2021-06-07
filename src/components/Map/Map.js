import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import * as placesData from "../../assets/data.json";
import "./Map.css";
import "leaflet/dist/leaflet.css";


export default function CrimeApp() {
  const [activePlace, setActivePlace] = React.useState(null);

  return (
    <MapContainer center={[45.4, -75.7]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {placesData.places.map(place => (
        <Marker
          key={place.properties["PLACE_ID"]}
          position={[
            place.geometry.coordinates[1],
            place.geometry.coordinates[0]
          ]}
          onClick={() => {
            setActivePlace(place);
          }}
        />
      ))}

      {activePlace && (
        <Popup
          position={[
            activePlace.geometry.coordinates[1],
            activePlace.geometry.coordinates[0]
          ]}
          onClose={() => {
            setActivePlace(null);
          }}
        >
          <div>
            <h2>{activePlace.properties.NAME}</h2>
            <p>{activePlace.properties.DESCRIPTIO}</p>
          </div>
        </Popup>
      )}
    </MapContainer>
  );
}
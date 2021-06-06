import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import mapData from "../../assets/commonplaces.json";

const ShowMap = ({ latitude, longitude }) => {
  //const [newMap, setMap] = useState([-31.417, -64.183]);

  return (
    <div>
      <MapContainer id="mapid" center={[-31.417, -64.183]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

        <Marker
          key={mapData['BUENPASTOR']['NAME']}
          position={[
            mapData['BUENPASTOR']['LAT'],
            mapData['BUENPASTOR']['LNG']
          ]}>
        <Popup>Estas aquí.</Popup>
      </Marker>
      
      </MapContainer>
    </div>
  );
};

export default ShowMap;

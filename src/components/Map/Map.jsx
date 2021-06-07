// import React from "react";
// import "./Map.css";
// import { TileLayer, MapContainer, Marker } from "react-leaflet";
// import { Grid } from "@material-ui/core";
// 
// const Map = ({
//   id,
//   /** component label */
//   label,
//   position = {
//     lat: -31.43087168213775,
//     lng: -64.21910252283733
//   },
//   /**(newValue: { lat: number, lng: number }) => void; */
//   onChange,
//   error_msg,
//   msg,
//   /** Material UI Breackpoints */
//   xs,
//   /** Material UI Breackpoints */
//   sm,
//   /** Material UI Breackpoints */
//   md,
//   /** Material UI Breackpoints */
//   lg,
//   /** Material UI Breackpoints */
//   xl,
// }) => {
//   return (
//     <Grid item container xs={xs} sm={sm} md={md} lg={lg} xl={xl} id={id} className="map-container" >
//       <Grid item>
//         <label
//           className={`map-label 
//               ${error_msg ? `map-error-color` : ``}`}
//         >
//           {label}
//         </label>
//       </Grid>
//       <Grid item>
//         <MapContainer center={position} zoom={13} scrollWheelZoom={true}
//           whenReady={(map) => {
//             map.target.on(
//               "click",
//               (e) => {
//                 const { lat, lng } = e.latlng;
//                 onChange({ lat, lng });
//               }
//             )
//           }
//           }
//         >
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           />
//           <Marker position={[position.lat, position.lng]} />
//         </MapContainer>
//       </Grid>
//       <Grid>
//         {error_msg ? (
//           <p className="map-msg map-error-color">{error_msg}</p>
//         ) : (
//           msg && <p className="map-msg">{msg}</p>
//         )}
//       </Grid>
//     </Grid>
//   );
// };
// 
// export default Map;

/*   const onChange = ({ lat, lng }) => set_state({lat, lng});

    const [state, set_state] = useState({
        lat: -31.43087168213775,
        lng: -64.21910252283733
    })

    console.log(state)

    <Grid item xs={12} container justify="center">
                <Map xs={8} label="Ubicacion" position={state} onChange={onChange} />
            </Grid> */
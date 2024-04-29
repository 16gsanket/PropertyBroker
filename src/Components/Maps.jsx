//main supporter class
// className="h-full w-4/12 bg-stone-200 rounded-3xl md:inline hidden"

import "leaflet/dist/leaflet.css"
import Maps1 from "./Maps_Attemps/Maps1"
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { apiRooms } from "../services/apiRooms";


function Maps({flats}) {
  const data = flats;

  const position = [19.0760, 72.8777];
  return (
    <div className="h-full w-4/12 bg-stone-200 rounded-3xl md:inline hidden overflow-hidden">
      <Maps1 data={data}/>
    </div>
  );
}

export default Maps;

/*import { useNavigate, useSearchParams } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useEffect, useState } from "react";

import Button from "./Button";
import { useGeoLocation } from "../hooks/useGeoLocation";
import { getURLPosition } from "../hooks/getURLPosition";

function Map() {
  const [mapPosition, setMapPosition] = useState([40, 0]);

  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeoLocation();
  
  const [mapLat , mapLng] = getURLPosition();

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );
  useEffect(
    function () {
      if (geolocationPosition)
        setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    },
    [geolocationPosition]
  );

  return (
    <div className="h-full w-4/12 bg-stone-200 rounded-3xl md:inline hidden">
      {!geolocationPosition && (
        <Button type="position" onClick={getPosition}>
          Capture Location
        </Button>
      )}
      {isLoadingPosition ? "Loading.." : "Use Your Position"}
      <MapContainer
        center={mapLat && mapLng ? [mapLat, mapLng] : mapPosition}
        // center={[mapLat, mapLng]}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        {cities?.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <p>
               this is pop up
              </p>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position, 6);
  return null;
}
function DetectClick() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => {
      console.log(e);
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}
export default Map;*/

// function Maps() {
//     return (
//         <div className="h-full w-4/12 bg-stone-200 rounded-3xl md:inline hidden">

//         </div>
//     )
// }

// export default Maps

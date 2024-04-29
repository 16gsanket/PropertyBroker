import { Icon, divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from "react-leaflet-cluster";
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMap,
  useMapEvent,
} from "react-leaflet";

function Maps({ data }) {
  const marker = [
    { geocode: [19.2183, 72.9781], popUp: "Hello i am pop 1" },
    { geocode: [19.001, 72.8397], popUp: "Hello i am pop 2" },
    { geocode: [18.96, 72.81], popUp: "Hello i am pop 3" },
  ];

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/14624/14624716.png",
    iconSize: [38, 38],
  });
  /*
  function createCustomClusterIcon(cluster) {
    return new divIcon({
      html: `<div className="cluster-icon">${cluster.getChildCount()}</div>`,
      iconSize: [20, 20, true],
    });
  }*/

  const position = [19.076, 72.8777];

  return (
    <div className="h-full w-full ">
      <MapContainer
        center={position}
        zoom={11}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy;  <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        {/* enable this cluster marker to cluster up the icons .. */}
        {/*   <MarkerClusterGroup
          chunkedLoading
          //   iconCreateFunction={createCustomClusterIcon}
        > */}
        {data?.map((data) => {
          return (
            <Marker position={data.geocode} icon={customIcon}>
              <Popup><h3>{data.price}</h3></Popup>
            </Marker>
          );
        })}
        {/* </MarkerClusterGroup> */}
      </MapContainer>
    </div>
  );
}

export default Maps;

import { GoogleMap, useLoadScript } from "@react-google-maps/api";

function Gmaps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });
  console.log(isLoaded)

  return (
    <div className="h-full w-4/12 bg-stone-200 rounded-3xl md:inline hidden overflow-hidden">
      {isLoaded ? (
        <GoogleMap
          center={{ lat: 19.001, lng: 19.001 }}
          zoom={10}
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
        >
          {/*Markers Here  */}
        </GoogleMap>
      ) : null}

      {/* {import.meta.env.VITE_SOME_KEY} */}
    </div>
  );
}

export default Gmaps;

import { useQuery } from "@tanstack/react-query";
import Flats from "./Flats";
import Maps from "./Maps";
import { apiRooms } from "../services/apiRooms";
import { useState } from "react";

function Main() {
  const {
    data: flats,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["flats"],
    queryFn: apiRooms,
  });

  const [filteredFlats, setFilteredFlats] = useState([]);

  function setSettingSetFilteredFlats(v) {
    setFilteredFlats(v);
  }

  console.log("after filters ,", filteredFlats);

  return (
    <div className="h-screen w-11/12  mx-auto rounded-3xl relative sm:top-[-8rem] top-[-9rem] flex justify-around">
      <Flats
        flats={flats}
        setSettingSetFilteredFlatss={setSettingSetFilteredFlats}
      />
      <Maps flats={flats} filteredFlats={filteredFlats} />
      {/* <Maps1 /> */}
    </div>
  );
}

export default Main;

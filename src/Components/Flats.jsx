import { useEffect, useState } from "react";
import Filters from "./Filters";
import FlatDisplay from "./FlatDisplay";

function Flats({ flats, setSettingSetFilteredFlatss }) {
  const [actiononroom, setactiononroom] = useState("sale");
  const [roomtype, setRoomType] = useState("1BHK");

  
  useEffect(
    function () {
      const flat_filteres = flats?.filter((flat) => {
        if (flat.roomFor === actiononroom && flat.roomType === roomtype) {
          return flat.id;
        }
      });
      setSettingSetFilteredFlatss(flat_filteres);
    },
    [flats, actiononroom, roomtype]
  );
  function handleactiononroom(v) {
    setactiononroom(v);
  }



  return (
    <div className=" h-full md:w-7/12 py-1 w-full border  bg-stone-200 rounded-3xl overflow-y-auto custom-scrollbar mx-2 dark:bg-stone-800 border-transparent">
      <Filters
        handleactiononroom={handleactiononroom}
        actiononroom={actiononroom}
        roomtype={roomtype}
        setRoomType={setRoomType}
      />
      <h2 className="ml-3 text-xl font-semibold dark:text-stone-200">
        Best Options
      </h2>
      <FlatDisplay
        actiononroom={actiononroom}
        roomtype={roomtype}
        flats={flats}
        
      />
    </div>
  );
}

export default Flats;


import { useQuery } from "@tanstack/react-query";
import Flats from "./Flats";

import Maps from "./Maps";
import { apiRooms } from "../services/apiRooms";
import { useState } from "react";

function Main() {

  const [actiononroom , setactiononroom] = useState('sale');
  const [roomtype , setRoomType] = useState('1BHK');

  function handleactiononroom(v){
      setactiononroom(v)
  }

  const{data, isLoading , error} = useQuery({
    queryKey:['flats'],
    queryFn:apiRooms
  })

  console.log('data from usQuery' , data);

  const filtered_flats = data?.filter(flat=>
                
    flat.roomFor === actiononroom && flat.roomType === roomtype) 

    console.log("filtered flats from main.jsx are , " , filtered_flats);

   return (
    !error &&(isLoading ? <h1>is loading</h1> : 

   <div className="h-screen w-11/12  mx-auto rounded-3xl relative sm:top-[-8rem] top-[-9rem] flex justify-around">
      <Flats filtered_flats={filtered_flats} handleactiononroom={handleactiononroom} actiononroom={actiononroom} roomtype={roomtype} setRoomType={setRoomType}/>
      <Maps flats={data}/>
    </div> )

  );
}

export default Main;

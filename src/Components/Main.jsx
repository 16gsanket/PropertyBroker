
import { useQuery } from "@tanstack/react-query";
import Flats from "./Flats";

import Maps from "./Maps";
import { apiRooms } from "../services/apiRooms";

function Main() {

  const{data:flats , isLoading , error} = useQuery({
    queryKey:['flats'],
    queryFn:apiRooms
  })
  
  
 
  return (
    <div className="h-screen w-11/12  mx-auto rounded-3xl relative sm:top-[-8rem] top-[-9rem] flex justify-around">
      <Flats flats={flats}/>
      <Maps flats={flats}/>
      {/* <Maps1 /> */} 
    </div>
  );
}

export default Main;

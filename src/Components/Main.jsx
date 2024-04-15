import Flats from "./Flats";

import Maps from "./Maps";
import Maps1 from "./Maps_Attemps/Maps1";

function Main() {
 
  return (
    <div className="h-screen w-11/12  mx-auto rounded-3xl relative top-[-8rem] flex justify-around">
      <Flats />
      {/* <Maps /> */}
      <Maps1 />
      {/* < Gmaps /> */}
    </div>
  );
}

export default Main;

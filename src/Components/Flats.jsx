import { useState } from "react";
import Filters from "./Filters"
import FlatDisplay from "./FlatDisplay"

function Flats() {
    const [actiononroom , setactiononroom] = useState('sale');
    const [roomtype , setRoomType] = useState('appartment');


    function handleactiononroom(v){
        setactiononroom(v)
        console.log(v)

    }
    return (
        <div className=" h-full md:w-7/12 py-1 w-full border  bg-stone-200 rounded-3xl overflow-y-auto custom-scrollbar mx-2">
            <Filters handleactiononroom={handleactiononroom} actiononroom={actiononroom} roomtype={roomtype} setRoomType={setRoomType} />
            <h2 className="ml-3 text-xl font-semibold">Best Options</h2>
            <FlatDisplay actiononroom={actiononroom} roomtype={roomtype}/>

            
        </div>
    )
}

export default Flats

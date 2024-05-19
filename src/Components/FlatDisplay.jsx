import { useState } from "react";
import Flat from "./Flat"

import './scroll.css'


function FlatDisplay({ actiononroom , roomtype  , flats_for_display}) {
  const flats = flats_for_display

    return (
        <div className="bg-transparent h-auto w-full px-2 py-2 flex flex-col gap-2 overflow-y-scroll custom-scrollbar">
            {flats?.map(flat=>
                
                flat.roomFor === actiononroom && flat.roomType === roomtype && <Flat flat={flat}/>

            )}
            <h2 className="text-center text-indigo-700 dark:text-yellow-600">No More Results</h2>
        </div>
    )
}



export default FlatDisplay

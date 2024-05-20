
import Flat from "./Flat"

import './scroll.css'



function FlatDisplay({actiononroom , roomtype ,flats }) {

    
    const filtered_flats_for_display = flats?.filter(flat=>
                
        flat.roomFor === actiononroom && flat.roomType === roomtype) 
    
        // console.log("filtered_flats_for_display ",filtered_flats_for_display)

    return (

        <div className="bg-transparent h-auto w-full px-2 py-2 flex flex-col gap-2 overflow-y-scroll custom-scrollbar">
            

            {/* flat.roomFor === actiononroom && flat.roomType === roomtype  */}

    {filtered_flats_for_display?.map(flat=>{
        return <Flat flat={flat}/>
    })  
    }
        

            <h2 className="text-center text-indigo-700 dark:text-yellow-600">No More Results</h2>
        </div>
    ) 
}



export default FlatDisplay

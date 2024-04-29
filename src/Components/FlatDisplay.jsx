
import Flat from "./Flat"

import './scroll.css'



function FlatDisplay({ filtered_flats }) {
    console.log('csne drom the flatdisplay' , filtered_flats);

    return (

        <div className="bg-transparent h-auto w-full px-2 py-2 flex flex-col gap-2 overflow-y-scroll custom-scrollbar">
            
    {filtered_flats.map(flat=>{
        return <Flat flat={flat}/>
    })  
    }
        

            <h2 className="text-center text-indigo-700 dark:text-yellow-600">No More Results</h2>
        </div>
    ) 
}



export default FlatDisplay

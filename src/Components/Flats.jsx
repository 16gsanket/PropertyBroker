import Filters from "./Filters"
import FlatDisplay from "./FlatDisplay"

function Flats() {
    return (
        <div className=" h-full md:w-7/12 py-1 w-full border  bg-stone-200 rounded-3xl overflow-y-auto custom-scrollbar mx-2">
            <Filters />
            <h2 className="ml-3 text-xl font-semibold">Best Options</h2>
            <FlatDisplay />

            
        </div>
    )
}

export default Flats

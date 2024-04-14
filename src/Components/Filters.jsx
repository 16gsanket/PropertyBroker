function Filters() {
    return (
        <div className="h-16 w-full px-2 border  border-b-stone-300  align-middle justify-around flex items-center">
            <select name="" id="" className="bg-[#7c82cf] py-2 px-3 rounded-xl text-white hover:bg-indigo-500">
                <option value="" className="bg-[#8d94eb] ">For Sale</option>
                <option value="" className="bg-[#8d94eb] ">For Rent</option>
                <option value="" className="bg-[#8d94eb] ">Buy</option>
            </select>
            <select name="" id=""  className="bg-[#7c82cf] py-2 px-3 rounded-xl text-white hover:bg-indigo-500">
                <option value="" className="bg-[#8d94eb] ">Type : Appartment</option>
                <option value="" className="bg-[#8d94eb] ">Type :Flat</option>
                <option value="" className="bg-[#8d94eb] ">Buy</option>
            </select>
            
        </div>
    )
}

export default Filters

function Filters({actiononroom , handleactiononroom, roomtype , setRoomType}) {
  return (
    <div className="h-16 w-full px-2  border-b border-b-slate-600 align-middle justify-around flex items-center ">
      <select
        name="for"
        id=""
        value={actiononroom}
        onChange={(e)=>handleactiononroom(e.target.value)}
        className="bg-gradient-to-br from-[#5680d4] to-[#aa8da9]   py-2 px-3 rounded-xl text-white hover:bg-indigo-500 dark:bg-stone-500 dark:bg-gradient-to-br dark:from-[#ea9013] dark:to-[#000000]">
        <option value="sale" className="bg-[#8d94eb] ">
          For Sale
        </option>
        <option value="rent" className="bg-[#8d94eb] ">
          For Rent
        </option>

      </select>
      <select
        name="type"
        id=""
        value={roomtype}
        onChange={e=>setRoomType(e.target.value)}
        // className="bg-[#7c82cf] py-2 px-3 rounded-xl text-white hover:bg-indigo-500">
        className="bg-gradient-to-br from-[#5680d4] to-[#aa8da9] py-2 px-3 rounded-xl text-white hover:bg-indigo-500 outline-none dark:bg-gradient-to-br dark:from-[#ea9013] dark:to-[#3b3018]">
        <option value="1BHK" className="bg-[#8d94eb] ">
          Type : 1 BHK
        </option>
        <option value="2BHK" className="bg-[#8d94eb] ">
          Type : 2 BHK
        </option>
        <option value="3BHK" className="bg-[#8d94eb] ">
          Type : 3 BHK
        </option>
        <option value="4BHK" className="bg-[#8d94eb] ">
          Type : 4 BHK
        </option>
        
      </select>
    </div>
  );
}

export default Filters;

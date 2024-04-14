function Filters({actiononroom , handleactiononroom, roomtype , setRoomType}) {
  return (
    <div className="h-16 w-full px-2 border  border-b-stone-300  align-middle justify-around flex items-center">
      <select
        name="for"
        id=""
        value={actiononroom}
        onChange={(e)=>handleactiononroom(e.target.value)}
        className="bg-[#7c82cf] py-2 px-3 rounded-xl text-white hover:bg-indigo-500"
      >
        <option value="sale" className="bg-[#8d94eb] ">
          For Sale
        </option>
        <option value="rent" className="bg-[#8d94eb] ">
          For Rent
        </option>
        <option value="buy" className="bg-[#8d94eb] ">
          Buy
        </option>
      </select>


      <select
        name="type"
        id=""
        value={roomtype}
        onChange={e=>setRoomType(e.target.value)}
        className="bg-[#7c82cf] py-2 px-3 rounded-xl text-white hover:bg-indigo-500"
      >
        <option value="appartment" className="bg-[#8d94eb] ">
          Type : Appartment
        </option>
        <option value="pg" className="bg-[#8d94eb] ">
          Type : Pg
        </option>
        
      </select>
    </div>
  );
}

export default Filters;

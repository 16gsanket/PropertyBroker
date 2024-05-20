import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSingleFlatDetails } from "../services/apiRooms.js";

function ShowFlat() {
  let { id } = useParams();
  console.log(id);

  const {
    data: flat,
    error,
    isLoading,
  } = useQuery({
    queryKey: [`flat`],
    queryFn: () => getSingleFlatDetails(id),
  });

  if(isLoading){
    
    return <h1>Is Loading</h1>
  }

  if(error){
    console.log('error')
  }

  if(!flat){
    return <h1>Flat Info Unavailable</h1>
  }

  const {
    title = "title",
    description = "description",
    address,
    area,
    locality = "locality",
    pincode,
    price = "price",
    roomType,
  } = flat;

  console.log(title, description);

  return (
    <>
      {/* {isLoading && (<h1>IsLoading</h1>)}
       {error && (<h1>{error}</h1>)}
       {!flat && (<h1>No Flat</h1>)}

       {!isLoading && flat &&  */}
      
      <div className="h-auto w-full bg-stone-100">
        <div className="md:h-[60vh] sm:h-[50vh] w-11/12 h-[40vh] rounded-3xl bg-stone-300 mx-auto my-1 overflow-hidden">
          <img src="/home/testime.jpg" alt="" className="h-full w-full" />
        </div>
        <div className="md:h-[50vh] sm:h-[40vh] h-[50dvh] w-11/12 rounded-2xl border border-stone-500 mx-auto my-2 sm:flex sm:align-middle sm:justify-around  sm:items-center ">
          <div className=" sm:h-full sm:w-7/12  w-full h-3/6 px-2 py-1">
             <h1 className="text-xl font-semibold text-indigo-800">{title}</h1>
                    <p>{description}</p>
                    <h3 className="my-1">🚩{locality}</h3> 
            {/* <h1 className="text-xl font-semibold text-indigo-800">{"title"}</h1> 
            <p>{"description"}</p>
            <h3 className="my-1">🚩{"locality"}</h3>*/}
            
          </div>

          <div className="sm:h-full sm:w-4/12 h-3/6 w-full relative px-2 ">
            <h6>Brief Information</h6>
            <div className="h-10 w-full bg-stone-200 rounded-xl px-2 py-1 my-2">
              ammentities
            </div>
            <h2>💵Estimated:₹ {price}</h2>

            <button className="absolute bottom-1">
              📞Contact : 8879414680{" "}
            </button>
          </div>
        </div>
      </div>
      {/* } */}
    </>
  );
}

export default ShowFlat;

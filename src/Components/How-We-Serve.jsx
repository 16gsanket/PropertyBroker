const stations = ["Mumbai" , "Mumbai Subarban" , "Sobo" , "Thane" , "Mulund" , "Bhandup"]

function HowWeServe() {
    return (
        <div className=" w-full h-[auto] flex flex-col gap-8  pb-5">
            <h2 className="text-3xl font-bold text-blue-800 text-center "> Our Locations</h2>

            <div className="flex gap-10 flex-wrap align-middle justify-center items-center">
                {stations.map(station=>{
                    return(
                        <div className="h-fit w-fit p-2 px-4 flex align-middle justify-center items-center bg-purple-800 text-lg text-stone-200 rounded-xl">
                                <h1>{station}</h1>


                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default HowWeServe

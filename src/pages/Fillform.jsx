
import {useForm} from "react-hook-form"
import { Form } from "react-router-dom";
import Button from "../Components/Button";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addRoom } from "../services/apiRooms";
import toast from "react-hot-toast";


function Fillform() {
// const[parking,setParking]= useState("no")
// const [roomtype , setroomtype] = useState("1BHK")
// const [roomfor , setroomfor] = useState("rent")
const{ register , reset , handleSubmit }=useForm()


        const{isLoading:isAdding , mutate} = useMutation({
            mutationFn:addRoom,
            onSuccess:()=>{
                toast.success("added successfuly")
                reset();
            },
            onError:(err)=>toast.error(err.message)
        })
    

    function onSubmit(data){
        console.log(data);

        const geocode = JSON.parse(data.geocode);

        // Replace the 'geocode' field in 'data' with the parsed array
        const newData = { ...data, geocode };

        console.log(newData)
        //passing new data to it
        mutate(newData)
    }
    return (
        <div className="h-fit w-full bg-transparent my-2" >
            <form onSubmit={handleSubmit(onSubmit)} className="h-full w-8/12 bg-stone-200 mx-auto flex flex-col gap-2 py-4 px-2">

                <input type="text" placeholder="Title" className="py-1 px-4 rounded-lg " {...register("title")} defaultValue={"title"}/>
                <input type="text" placeholder="Description" className="py-1 px-4 rounded-lg " {...register("description")} defaultValue={"Description"}/>
                <input type="text" placeholder="Images" className="py-1 px-4 rounded-lg "  {...register("images")} defaultValue={"image"}/>
                <input type="text" placeholder="Price" className="py-1 px-4 rounded-lg "  {...register("price")} defaultValue={230}/>
                <input type="text" placeholder="area in sqmtr" className="py-1 px-4 rounded-lg "  {...register("area")} defaultValue={230}/>
                <input type="text" placeholder="address" className="py-1 px-4 rounded-lg "  {...register("address")} defaultValue={"Address"}/>
                <input type="text" placeholder="locality" className="py-1 px-4 rounded-lg "  {...register("locality")} defaultValue={"Locality"}/>
                <input type="text" placeholder="pincode" className="py-1 px-4 rounded-lg "  {...register("pincode")} defaultValue={400083}/>
                <input type="text" placeholder="floorNumber" className="py-1 px-4 rounded-lg "  {...register("floorNumber")} defaultValue={23}/>
            <>
                <label htmlFor="">parking</label>
                <select name="parking" id="parking"   {...register("parking")} defaultValue={"FALSE"}>
                    <option value="FALSE">no</option>
                    <option value="TRUE">yes</option>
                </select>
            </>
                <>
                <label htmlFor="">RoomType</label>
                <select name="RoomType" id="roomtype"   {...register("roomType")} defaultValue={"1BHK"}>
                    <option value="1BHK">1 BHK</option>
                    <option value="2BHK">2 BHK</option>
                    <option value="3BHK">3 BHK</option>
                    <option value="4BHK">4 BHK</option>
                </select>
                </>
                <>
                <label htmlFor="">RoomFor</label>
                <select name="roomFor"    {...register("roomFor")} defaultValue={"rent"}>
                    <option value="rent">rent</option>
                    <option value="sale">sale</option>
                  
                </select>
                </>
            
                <input type="text" placeholder="geocode" className="p-1" defaultValue='[10,10]' {...register("geocode")}/>
           
            <div className="w-full items-center flex justify-around">
                <Button type="small" >Submit</Button>
                <button type="reset" className=" border border-stone-400 py-1 px-3 rounded-full hover:bg-stone-300">Reset</button>
            </div>
                

            </form>
            
        </div>
    )
}

export default Fillform

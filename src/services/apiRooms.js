import supabase from "./supabase";

export async function apiRooms() {
    let { data: Rooms, error } = await supabase
    .from('Rooms')
    .select('*')
  if(error){
    console.log('error')
    throw new Error("")
  }
   return Rooms;
}

export async function addRoom(newRoom){
 
const { data, error } = await supabase
.from('Rooms')
.insert([newRoom])
.select()

    if (error) {
      console.log(error)
      throw new Error("Cannot Add the Flat");
    } 

}



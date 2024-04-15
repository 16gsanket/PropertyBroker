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

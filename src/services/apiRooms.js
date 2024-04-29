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

export async function addRoom(room){
  const { data, error } = await supabase
    .from('Rooms')
    .insert([
      room
    ])
    .select()

    // if (error) {
    //   throw new Error("Cannot delete the Cabin");
    // } 

}



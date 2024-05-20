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

export async function getSingleFlatDetails(id){
  console.log('i am inside the getSingleFlatDetails function');

  const { data, error } = await supabase
  .from('Rooms')
  .select('*')
  .eq('id',id)
  .single()

  if(error){
    console.log(error)
    throw new Error("Cannot find the single Flat");
  }
  return data;
}



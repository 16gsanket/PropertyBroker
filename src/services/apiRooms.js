import supabase from "./supabase";

export async function apiRooms() {
  const { data: Rooms, error } = await supabase.from("Rooms").select("id");

  if(error){
    console.log('error')
    throw new Error("")
  }

  console.log(Rooms)

  return Rooms;
}

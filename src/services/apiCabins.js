import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

	if (error){
		console.error(error);
		throw new Error('Cabins could nor be loaded');
	}

	return data;
}
const data = await getCabins();
console.log(data);


import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

// This function will create or edit a cabin
export async function createEditCabin(newCabin, id) {
  console.log(newCabin, id);
  // new images will not have a suberbase url
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  // A unique file name.     Supabase creates a new folder if there's a '/', and we do not want this, so replace them.
  const unqiueImageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${unqiueImageName}`;

  // The path will look like this:  https://helmgrpgdzvuklgljzpy.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  // 1. Create/Edit Cabin

  // This variable keeps being added to as code continues....
  let query = supabase.from("cabins");

  // A) CREATE -if no id gets passed in create a new cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) EDIT
  if (id)
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();
  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // 2. If successful, upload image
  
  // if already an image, return data
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(unqiueImageName, newCabin.image);

  // 3. If there was an error uploading image, do not upload data
  if (storageError) {
    // delete cabin (data)
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error("Cabin image could not be uploaded, no cabin was created");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}

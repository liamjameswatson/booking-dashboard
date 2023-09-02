import supabase from "./supabase";

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}


export async function getCurrentUser() {
  // gets the session from local storage
  const {data: session} = await supabase.auth.getSession()

  // if no current user 
  if(!session.session) return null;

const {data, error} = await supabase.auth.getUser()

console.log(data)

if (error) throw new Error(error.message);
console.log(data);
return data?.user;

}
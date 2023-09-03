import supabase from "./supabase";

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });
  if (error) throw new Error(error.message);
  return data;
}

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
  const { data: session } = await supabase.auth.getSession();

  // if no current user
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  // There are two seperate forms, so only the password or name can be updated at once.

  // 1) update password or full name
  let updateData;
  // if password updateData will be an object with the password
  if (password) updateData = { password };
  // if fullName update data will a data object, for supabase
  if (fullName) updateData = { data: { fullName } };

  // pass the update data object into updateUser from supabase
  const { data, error } = supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);

  if (!avatar) return data;

  // 2) Upload the avatar image

  // 3) Update avatar in the user
}

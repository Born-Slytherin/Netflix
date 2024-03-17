import supabase from "../Supabase";

async function getData() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  }
export default getData
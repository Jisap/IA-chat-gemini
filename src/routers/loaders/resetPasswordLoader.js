import { account } from "../../lib/appwrite";
import { redirect } from "react-router-dom";



const resetPasswordLoader = async ({ request }) => {

  const url = new URL(request.url);

  try {
    await account.get()
    redirect("/")
    
  } catch (error) {
    console.log("Error getting user session:", error.message);
    return null
  }

  if(!url.searchParams.get('userId') && !url.searchParams.get('secret')){
    return redirect("/reset-link")
  }

  return null
}

export default resetPasswordLoader;
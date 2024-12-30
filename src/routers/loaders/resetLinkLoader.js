import { account } from "../../lib/appwrite";
import { redirect } from "react-router-dom";



const resetLinkLoader = async () => {

  try {
    await account.get()

  } catch (error) {
    console.log("Error getting user:", error.message);
    return null
  }

  return redirect("/")
}

export default resetLinkLoader;
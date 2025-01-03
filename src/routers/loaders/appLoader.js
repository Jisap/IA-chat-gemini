import { Account } from "appwrite";
import { redirect } from "react-router-dom";


const appLoader = async (ctx) => {

  const data = {}
  
  try {
    data.user = await Account.get()
    
  } catch (error) { 
    console.log(`Error getting user session: ${error.message}`)
    return redirect('/login')
  }

  return data
}

export default appLoader;
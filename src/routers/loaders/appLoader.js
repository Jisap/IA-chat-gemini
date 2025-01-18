
import { redirect } from "react-router-dom";
import { account, databases } from "../../lib/appwrite";
import { Query } from "appwrite"

const appLoader = async (ctx) => {

  const data = {}
  
  try {
    data.user = await account.get(); // Añadimos el usuario actualmente logueado en la variable data
    
  } catch (error) { 
    console.log(`Error getting user session: ${error.message}`)
    return redirect('/login')
  }

  try {
    data.conversations = await databases.listDocuments( // Añadimos las conversaciones de la base de datos en la variable data
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      "conversations",
      [
        Query.select(["$id", "title"]),
        Query.orderDesc("$createdAt"),
        Query.equal("user_id", data.user.$id),
      ]
    )
  } catch (error) {
    console.log(`Error getting conversations: ${error.message}`);
  }
  
  //console.log(data);
  return data; // Esta data será descargada en app/:conversationId con useLoaderData()
}

export default appLoader;
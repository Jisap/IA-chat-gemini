import { redirect } from "react-router-dom";
import { account, databases } from "../../lib/appwrite";




const conversationLoader = async ({ params }) => {
  const { conversationId } = params;
  const data = {}

  try {
    data.user = await account.get();                                 // Obtiene el usuario logueado
  } catch (error) {
    console.log(`Error getting user: ${error.message}`);
    return redirect("/login");
  }

  try {
    data.conversation = await databases.getDocument(                 // Obtiene la conversación de la base de datos en base al id de los params
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      "conversations",
      conversationId
    );
  } catch (error) {
    console.log(`Error getting conversation: ${error.message}`);	
    throw error
  }

  return data;
}

export default conversationLoader
import { account, databases } from "../../lib/appwrite";
import { getConversationTitle, getAiResponse } from "../../api/googleAi";
import generateID from "../../utils/generateID";
import { a } from "framer-motion/client";




const userPromptAction = async (formData) => {
  
  const userPrompt = formData.get("user_prompt");                   // Obtiene el valor del inputField
  const user = await account.get();                                 // Obtiene el usuario actual
  const conversationTitle = await getConversationTitle(userPrompt); // Obtiene el título de la conversación
  
  let conversation = null;

  try {
    conversation = await databases.createDocument(  // Creamos la conversación en la base de datos
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      "conversations",
      generateID(),
      {
        title: conversationTitle,
        user_id: user.$id,
      }
    );
  } catch (error) {
    console.log(`Error creating conversation: ${error.message}`);
  }

  const aiResponse = await getAiResponse(userPrompt); // Obtiene la respuesta del AI

  try {
    await databases.createDocument(                  // Creamos el chat en la base de datos
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      "chats",
      generateID(),
      {
        user_prompt: userPrompt,
        ai_response: aiResponse,
        conversationsrelation: conversation.$id
      }
    )
  } catch (error) {
    console.log(`Error creating chat: ${error.message}`);
  }

  return null
}

const appAction = async ({ request }) => {
  const formData = await request.formData();
  const requestType = formData.get("request_type");

  if(requestType === "user_prompt"){
    return await userPromptAction(formData) // Si existe un user_prompt creamos una conversación y un chat con la respuesta de la AI
  }
}

export default appAction
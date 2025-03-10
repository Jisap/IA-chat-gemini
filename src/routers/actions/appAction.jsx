import { account, databases } from "../../lib/appwrite";
import { getConversationTitle, getAiResponse } from "../../api/googleAi";
import generateID from "../../utils/generateID";
import { redirect } from "react-router-dom";




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

  return redirect(`/${conversation.$id}`);	// Despues de crear la conversación, redirigimos a la misma :/app/:conversationId
}

const deleteConversationAction = async(formData) => {
  const conversationId = formData.get("conversationId");
  const conversationTitle = formData.get("conversation_title");

  try {
    await databases.deleteDocument( // Borramos la conversación de la base de datos
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      "conversations",
      conversationId
    );
    return { conversationTitle }; 
  }catch(error){
    console.log(`Error deleting conversation: ${error.message}`);
  }
}

const appAction = async ({ request }) => {
  const formData = await request.formData();
  const requestType = formData.get("request_type");

  if(requestType === "user_prompt"){
    return await userPromptAction(formData) // Si existe un user_prompt creamos una conversación y un chat con la respuesta de la AI
  }

  if(requestType === "delete_conversation"){
    return await deleteConversationAction(formData)
  }
}

export default appAction
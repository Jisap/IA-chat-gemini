import { getAiResponse } from "../../api/googleAi"
import { databases } from "../../lib/appwrite"
import generateID from "../../utils/generateID"




const conversationAction = async({ request, params }) => {
  const { conversationId } = params;
  const formData = await request.formData();
  const userPrompt = formData.get("user_prompt");                           // Siguientes preguntas del usuario en :/app/conversationId
  
  let chatHistory = [];
  let aiResponse = "";

  try {
    const { chatsrelation } = await databases.getDocument(                  // Obtenemos los chats (preguntas del user) de la conversation (respuesta del Ai)
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      "conversations",
      conversationId
    );
    
    chatHistory = chatsrelation.map(({ user_prompt, ai_response }) => {     // Obtenemos el historial de chats correspondientes a la conversation
      return { user_prompt, ai_response }
    })

  } catch (error) {
    console.log(`Error getting chat: ${error.message}`);
  }

  try {
    aiResponse = await getAiResponse(userPrompt, chatHistory)                // Obtenemos la respuesta de la IA en base a la nueva pregunta y el historial 
  } catch (error) {
    console.log(`Error getting Gemini response: ${error.message}`);
  }
console.log("aiResponse:", aiResponse);
  return null
}

export default conversationAction
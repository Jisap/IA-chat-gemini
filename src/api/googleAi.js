

import model from "../lib/googleAi";

const getConversationTitle = async( userPrompt ) => {
  try {
    const result = await model.generateContent(
      `Given a user prompt, generate a concise and informative title thant accurately describes the conversation. 
      Consider keywords, topics, and the overwall intent of the prompt. Response in plain text format, not markdown.
      
      Prompt: ${userPrompt} `
    );

    return result.response.text();
  } catch (error) {
    console.log(`Error generating title: ${error.message}`);
  }
}

const getAiResponse = async (userPrompt, chats = []) => {

  const history = []
  chats.forEach(({ user_prompt, ai_response }) => { // Si se pasa un historial de chats, se agrega a la conversación
    history.push(
      { 
        role: "user", 
        parts: [{ text: user_prompt }]
      },
      {
        role: "model",
        parts: [{ text: ai_response }]
      }
    )
  });

  try {

    model.generationConfig = { temperature: 1.5 };          // Ajusta la temperatura del generador
    const chat = model.startChat({ history });              // Inicia una conversación
    const result = await chat.sendMessage(userPrompt);      // Envía el mensaje al generador
    return result.response.text();                          // Devuelve el resultado del generador

  } catch (error) {
    console.log(`Error generating response: ${error.message}`);
  }
}

export { getConversationTitle, getAiResponse };
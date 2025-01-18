import { motion } from 'framer-motion'
import React from 'react'
import PageTitle from '../components/PageTitle'
import { useLoaderData } from 'react-router-dom'
import UserPrompt from '../components/UserPrompt'
import AiResponse from '../components/AiResponse'
import PromptPreloader from '../components/PromptPreloader'
import usePromptPreloader from '../hooks/usePromptPreloader'



const Conversation = () => {

  const { conversation: { title, chatsrelation } } = useLoaderData() || {};
  //console.log("chatsrelation desde conversation", chatsrelation);

  const { promptPreloaderValue } = usePromptPreloader(); // Obtiene el valor del prompt del user 

  return (
    <>
      <PageTitle title={`${title} | Phoenix`} />

      <motion.div 
        className='max-w-[700px] mx-auto !will-change-auto'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.05, ease: 'easeOut' }}
      >
        {chatsrelation.map((chatrelation) => (
          <div key={chatrelation.$id}>
            <UserPrompt text={chatrelation.user_prompt} />
            <AiResponse airesponse={chatrelation.ai_response} />
          </div>
        ))}
      </motion.div>

      {/* submit ->:/conversationId -> usePromptPreloader detecta si hay data en navigation -> extrae el valor del user_prompt -> renderiza el componente PromptPreloader */}
      {/* Cuando termina la navegación, el componente PromptPreloader desaparece  y se renderiza resto del componente de <Conversation /> */}
      {promptPreloaderValue && (
        <PromptPreloader promptValue={ promptPreloaderValue } /> 
      )}

    </>
  )
}

export default Conversation
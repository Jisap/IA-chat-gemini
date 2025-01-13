import { motion } from 'framer-motion'
import React from 'react'
import PageTitle from '../components/PageTitle'
import { useLoaderData } from 'react-router-dom'
import UserPrompt from '../components/UserPrompt'
import AiResponse from '../components/AiResponse'


const Conversation = () => {

  const { conversation: { title, chatsrelation } } = useLoaderData() || {};
  console.log("chatsrelation desde conversation", chatsrelation);

  return (
    <>
      <PageTitle title={`${title} | Phoenix`} />

      <motion.div>
        {chatsrelation.map((chatrelation) => (
          <div key={chatrelation.$id}>
            <UserPrompt text={chatrelation.user_prompt} />
            <AiResponse airesponse={chatrelation.ai_response} />
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default Conversation
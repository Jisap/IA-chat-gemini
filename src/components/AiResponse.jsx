import PropTypes from 'prop-types'
import React from 'react'
import { iconLogo } from '../assets/assets'
import  Markdown  from 'react-markdown'
import remarkGfm from 'remark-gfm'



const AiResponse = ({airesponse, children}) => {
  return (
    <div className='grid grid-cols-1 items-start gap-1 py-4 md:grid-cols-[max-content,minmax(0,1fr)]'>
      <figure className='w-8 h-8 grid place-items-center'>
        <img 
          src={iconLogo} 
          alt="Logo"
          width={32}
          height={32}
        />
      </figure>

      {children}

      <div className='markdown-content'>
        <Markdown
          remarkPlugins={[remarkGfm]}
        >
          {airesponse}
        </Markdown>
      </div>
    </div>
  )
}

AiResponse.propTypes = {
  airesponse: PropTypes.string,
  children: PropTypes.node,
}

export default AiResponse
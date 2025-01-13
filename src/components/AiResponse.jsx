import PropTypes from 'prop-types'
import React from 'react'




const AiResponse = ({airesponse}) => {
  return (
    <div>{airesponse}</div>
  )
}

AiResponse.propTypes = {
  airesponse: PropTypes.string,
}

export default AiResponse
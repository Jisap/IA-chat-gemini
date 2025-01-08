import { motion } from "framer-motion"
import { IconBtn } from "./Button"




const PromptField = () => {
  return (
    <motion.div
      className="prompt-field-container"
    >
      <motion.div
        className="prompt-field"
        contentEditable={true}
        role="textbox"
        aria-multiline={true}
        aria-label="Enter a prompt here"
        data-placeholder="Enter a prompt here"
      />
      <IconBtn 
        icon="send"
        title="Submit"
        size="large"
        className="ms-auto"
      />
      <div className="state-layer"></div>
    </motion.div>
  )
}

export default PromptField
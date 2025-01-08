import { motion } from "framer-motion"
import { IconBtn } from "./Button"




const PromptField = () => {

  const promptFieldVariant = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.4,
        delay: 0.4,
        ease: [0.05, 0.7, 0.1, 1]
      }
    },
  }

  const promptFieldChildrenVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <motion.div
      className="prompt-field-container"
      variants={promptFieldVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="prompt-field"
        contentEditable={true}
        role="textbox"
        aria-multiline={true}
        aria-label="Enter a prompt here"
        data-placeholder="Enter a prompt here"
        variants={promptFieldChildrenVariant}
      />
      <IconBtn 
        icon="send"
        title="Submit"
        size="large"
        className="ms-auto"
        variants={promptFieldChildrenVariant}
      />
      <div className="state-layer"></div>
    </motion.div>
  )
}

export default PromptField
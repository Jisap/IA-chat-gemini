import { motion } from "framer-motion"
import { IconBtn } from "./Button"
import { useRef, useCallback, useState } from "react"
import { useNavigation, useSubmit, useParams } from "react-router-dom"


const PromptField = () => {

  const inputField = useRef();
  const navigation= useNavigation()
  const inputFieldContainer = useRef();
  const [placeholderShown, setPlaceholderShown] = useState(true);
  const [isMultiline, setIsMultiline] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const submit = useSubmit(); // hook para enviar peticiones

  const { conversationId } = useParams();

  const handleInputChange = useCallback(() => {
    if(inputField.current.innerText === "\n"){                     // Si se pulsa enter
      inputField.current.innerHTML = "";                           // la nueva linea no tiene contenido
    }
    
    setPlaceholderShown(!inputField.current.innerText)             // Si el inputField no tiene contenido, placeholderShown=true -> placeholder hidden
    setIsMultiline(inputFieldContainer.current.clientHeight > 64)  // Si el inputFieldContainer tiene más de 64 px de alto, es multilinea -> multiline=true -> rounded-large
    setInputValue(inputField.current.innerText.trim())             // Establece el valor del inputField
  },[]);

  const moveCursorToEnd = useCallback(() => {
    const editableElem = inputField.current;                       // Referencia al elemento editable
    const range = document.createRange();                          // Representa un fragmento del documento que puede contener nodos
    const selection = window.getSelection();                       // Representa el rango de texto seleccionado por el usuario o la posición actual del cursor

    range.selectNodeContents(editableElem);                        // Establece el Range para abarcar todo el contenido del editableElem.
    range.collapse(false);                                         // Colapsa el Range a su punto final, moviendo efectivamente el cursor al final del contenido.
    selection.removeAllRanges();                                   // Elimina cualquier selección existente.       
    selection.addRange(range);                                     // Agrega el Range recién creado a la selección, colocando el cursor al final del contenido.
  }, [])

  const handlePaste = useCallback((e) => {
    e.preventDefault();
    inputField.current.innerText += e.clipboardData.getData('text')
    
    handleInputChange()
    moveCursorToEnd()
  },[handleInputChange, moveCursorToEnd]);

  const handleSubmit = useCallback(() => {
    if(!inputValue || navigation.state === "submitting") return;  // Si el inputField está vacío o si se está enviando una petición, no se envía nada
    
    submit(                                                       // Envía la petición con el valor del inputField a "/" o a "/:conversationId"donde la appAction se encarga de procesarla
      {
        user_prompt: inputValue,                                  // La clave "user_prompt" almacena el valor del inputField
        request_type: "user_prompt",
      },
      {
        method: "POST",
        encType: "application/x-www-form-urlencoded",
        action: `/${conversationId || ""}`
      }// Aqui se crea el navigation.formData
    )

    inputField.current.innerHTML = ""
    handleInputChange()
  },[
    handleInputChange, 
    inputValue, 
    navigation.state, 
    submit,
    conversationId
  ])

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
      className={`prompt-field-container ${isMultiline ? "rounded-large" : ""}`}
      variants={promptFieldVariant}
      initial="hidden"
      animate="visible"
      ref={inputFieldContainer}
    >
      <motion.div
        className={`prompt-field ${placeholderShown ? "" : "after:hidden"}`}
        contentEditable={true}
        role="textbox"
        aria-multiline={true}
        aria-label="Enter a prompt here"
        data-placeholder="Enter a prompt here"
        variants={promptFieldChildrenVariant}
        ref={inputField}
        onInput={handleInputChange}
        onPaste={handlePaste}
        onKeyDown={(e) => {
          if(e.key === "Enter" && !e.shiftKey){
            e.preventDefault()
            handleSubmit()
          }
        }}
      />
      <IconBtn 
        icon="send"
        title="Submit"
        size="large"
        className="ms-auto mb-1.5"
        variants={promptFieldChildrenVariant}
        onClick={handleSubmit}
      />
      <div className="state-layer"></div>
    </motion.div>
  )
}

export default PromptField
import { useEffect, useState } from "react"
import { useNavigation } from "react-router-dom"



// Analiza la ruta actual y establece el valor del promptPreloaderValue

const usePromptPreloader = () => {

  const navigation = useNavigation();
  const [promptPreloaderValue, setPromptPreloadertValue] = useState("");

  useEffect(() => {
    if(navigation.formData){                                              // Si se hizo submit en la /app te redirigiran a la ruta "/:conversationId" y el objeto navigation.formData ira a dicha ruta
      setPromptPreloadertValue(navigation.formData.get("user_prompt"))    // establecemos el valor del promptPreloaderValue con el valor del user_prompt del formulario 
    } else {
      setPromptPreloadertValue("")
    }

  },[navigation])

  return { promptPreloaderValue }
}


export default usePromptPreloader
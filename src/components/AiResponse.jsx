import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { iconLogo } from '../assets/assets'
import Markdown from 'react-markdown' // Renderiza contenido en formato Markdown.
import remarkGfm from 'remark-gfm'    // Habilita extensiones de Markdown como tablas, listas de tareas y enlaces automáticos.
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter' // Resaltar bloques de código con temas específicos
import { hopscotch, coy } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { IconBtn } from './Button'
import toTitleCase from '../utils/toTitleCase'
import { useSnackbar } from '../hooks/useSnackbar'

const AiResponse = ({airesponse, children}) => {
  
  const [codeTheme, setCodeTheme] = useState('')
  const { showSnackbar, hideSnackbar } = useSnackbar()

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)') // Obtiene la configuración del tema del navegador 
    setCodeTheme(mediaQuery.matches ? hopscotch : coy)                   // Si el tema es oscuro, se aplica el tema hopscotch, de lo contrario, se aplica el tema coy
  
    const themeListener = mediaQuery.addEventListener('change', (e) => { // Cuando cambia la configuración del tema del navegador, se actualiza el tema de la aplicación
      setCodeTheme(e.matches ? hopscotch : coy)
    })

    return () => mediaQuery.removeEventListener('change', themeListener)
  },[]);

  const handleCopy = useCallback(async(text) => {
    hideSnackbar();
    try {
      await navigator.clipboard.writeText(text);
      showSnackbar({ 
        message: 'Copiado al portapapeles',
        timeOut: 2500 
      });
    } catch (error) {
      showSnackbar({ 
        message: error.message,
      });
      console.error(`Error al copiar el texto: ${error.message}`)
    }
  },[showSnackbar, hideSnackbar]);


  const code = ({ children, className, ...rest }) => {                   // Componente para renderizar bloques de código
    const match = className?.match(/language-(\w+)/)                     // Detecta si el markdown contiene una clase que expecifica el lenguaje de código
    return match ? (                                                     // Si lo tiene, renderiza el bloque de código 
      <>
        <div className='code-block'>
          <div className='p-4 pb-0 font-sans'>{toTitleCase(match[1])}</div> 
          <SyntaxHighlighter 
            {...rest} 
            PreTag="div" 
            language={match[1]} // obtiene el lenguaje a partir de la clase language-<lenguaje> del Markdown.
            style={codeTheme}   // Aplica un tema visual para el resaltado de sintaxis.
            customStyle={{      // Estilos CSS adicionales
              marginBlock: "0",
              padding: "2px",
            }}
            codeTagProps={{     // Propiedades adicionales para el elemento <code>
              style: {
                padding: "14px",
                fontWeight: "600"
              }
            }}
          >
            {children}
          </SyntaxHighlighter>
        </div>

        <div className='bg-light-surfaceContainer dark:bg-dark-surfaceContainer rounded-t-extraSmall 
        rounded-b-medium flex justify-between items-center h-11 font-sans text-bodyMedium ps-4 pe-2'>
          <p>
            Use code
            <a 
              className='link ms-2' 
              href="https://gemini.google.com/faq#coding"
              target="_blank"  
            >
              with caution.
            </a>
          </p>

          <IconBtn 
            icon="content_copy"
            size="small"
            title="Copy code"
            onClick={handleCopy.bind(null, children)}
          />
        </div>
      </>
    ) : (
      <code className={className}>{children}</code>
    )
  }
  
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
          remarkPlugins={[remarkGfm]}  // Habilita extensiones de Markdown como tablas, listas de tareas y enlaces automáticos.
          components={{ code }}        // Código de Markdown personalizado
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
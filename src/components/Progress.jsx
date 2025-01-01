
import { motion } from "framer-motion";
import PropTypes from "prop-types";


const CircularProgress = ({ 
  classes = '',
  size = '',
 }) => {
  return (
    <div 
      role="progressbar"
      className={`circular-progress ${size} ${classes}`}
    >  
    </div>
  )
}

CircularProgress.propTypes = {
  classes: PropTypes.string,
  size: PropTypes.string,
}

const LinearProgress = ({ classes = '' }) => {

  const progressbarVariant = {
    start: { scaleY: 0 },                // Inicializa la animación con la escala en el eje Y en 0
    end: {                               // Termina la animación con la escala en el eje Y en 1
      scaleY: 1,
      transition: {                      // Configuración de la transición
        when: 'beforeChildren',
        duration: 0.2,
        ease: 'easeOut',
        delay: 0.5
      },
    },
    exit: {                              // Sale de la animación con la escala en el eje Y en 0
      scaleY: 0,
      transition: {
        duration: 0.1,
        ease: 'easeOut'
      }
    }
  }

  const activeIndicatorVariant = {       // Variantes para el indicador activo
    start: { translateX: '-100%' },      // Inicializa la animación con la posición del indicador en -100% (esta oculto el contenido)
    end: { translateX: '100%' },         // Termina la animación con la posición del indicador en 100% (está visible el contenido)
  }


  return (
    <motion.div 
      role='progress'
      variants={progressbarVariant}
      initial='start'
      animate='end'
      exit='exit'
      className={`linear-progress ${classes}`} // Agrega la clase "linear-progress" al elemento que el punto de transformación en la parte superior del elemento.
    >
      <motion.div 
        variants={activeIndicatorVariant}      // Provoca una transición de posición para el indicador activo desde -100 a 100.
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: [0.2, 0, 0, 1]
        }}
        className="active-indicator"
      >
      </motion.div>
    </motion.div>
  )
}

LinearProgress.propTypes = {
  classes: PropTypes.string,
}

export { CircularProgress, LinearProgress }
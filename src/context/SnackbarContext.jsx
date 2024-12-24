

import { createContext, useState, useRef, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '../components/Snackbar';


const initialCtxValue = {
  snackbar: {
    open: false,
    message: '',
   type: 'info',
  },
  showSnackbar: ({ message, type='info', timeout=5000 }) => {},
  hideSnackbar: () => {},
}

export const SnackbarContext = createContext(initialCtxValue);                        // Se crea el contexto SnackbarContext y se le asigna initialCtxValue como valor inicial.

const SnackbarProvider = ({ children }) => {

  const [snackbar, setSnackbar] = useState({                                          // Se inicializa el estado del snackbar como cerrado (open: false), sin mensaje (message: '') y con tipo de notificación 'info'.
    open: false,
    message: '',
    type: 'info',
  });

  const timeoutRef = useRef();                                                        // Referencia mutable donde se almacenará el identificador del temporizador. Esto permite gestionar el tiempo de visibilidad del snackbar.

  const showSnackbar = useCallback(({ message, type = 'info', timeout = 5000 }) => {  // Función que muestra el snackbar. Se Memoriza la función para que no se recree en cada render.
    if(timeoutRef.current) clearTimeout(timeoutRef.current);                          // Si el temporizador está activo, se cancela.

    setSnackbar({ open: true, message, type })                                        // Sino se establece el estado del snackbar como abierto (open: true) y el mensaje.
    timeoutRef.current = setTimeout(() => {                                           // y se establece el temporizador para ocultar el snackbar después de un tiempo determinado.
      setSnackbar((prev) => { 
        return {
          ...prev, open: false 
        }
      })
    }, timeout);
  },[]);

  const hideSnackbar = useCallback(() => {                                             // Función que oculta el snackbar                              
    if((timeoutRef.current)) clearTimeout(timeoutRef.current);                         // Si el temporizador está activo, se cancela.
    setSnackbar({ open: false, message: '', type: 'info' })                            // y sino está activo se resetea el estado del snackbar.
  }, []);

  const contextValue = useMemo(() => {                                                 // Se crea el valor del contexto que contiene las funciones showSnackbar y hideSnackbar.
    return { showSnackbar, hideSnackbar }
  }, [showSnackbar, hideSnackbar]);

  return (
    <SnackbarContext.Provider value={contextValue}>
      {children}
      <Snackbar snackbar={snackbar} />
    </SnackbarContext.Provider>
  )
}

SnackbarProvider.propTypes = {
  children: PropTypes.any,
}

export default SnackbarProvider
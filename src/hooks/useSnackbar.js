


import { useContext } from 'react'
import { SnackbarContext } from '../context/SnackbarContext.jsx'

export const useSnackbar = () => useContext(SnackbarContext); // Función reutilizable que encapsula la lógica de acceso al contexto SnackbarContext.



import { useContext } from 'react'
import { SnackbarContext } from '../context/SnackbarContext.jsx'

export const useSnackbar = () => useContext(SnackbarContext)
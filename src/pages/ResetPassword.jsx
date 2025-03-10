
import React, { useEffect } from 'react'
import PageTitle from '../components/PageTitle'
import { Link, Form, useNavigation, useActionData } from 'react-router-dom'
import { logoDark, logoLight, banner } from '../assets/assets'
import TextField from '../components/TextField'
import { Button } from '../components/Button'
import { CircularProgress, LinearProgress } from '../components/Progress'
import { useSnackbar } from '../hooks/useSnackbar'
import { AnimatePresence } from 'framer-motion'
import Logo from '../components/Logo'


const ResetPassword = () => {

  const error = useActionData();      // Usa el hook useActionData para obtener los datos de la acción
  const navigation = useNavigation(); // Devuelve el objeto de navegación que contiene elementos como goBack, navigate, etc.

  const { showSnackbar } = useSnackbar(); // Hook que nos permite acceder al estado del snackbar

  useEffect(() => {
    if (error?.message) {
      showSnackbar({ message: error.message, type: 'error' })
    }
  }, [error, showSnackbar])

  return (
    <>
      <PageTitle title="New password" />  

      <div className='relative w-screen h-dvh p-2 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] lg:gap-2'>
        <div className='flex flex-col p-4'>
          <Logo classes='mb-auto mx-auto lg:mx-0' />

          <div className='flex flex-col ga-2 max-w-[480px] w-full mx-auto'>
            <h2 className='text-displaySmall font-semibold text-light-onBackground dark:text-dark-onBackground text-center'>
              Set a new password
            </h2>
            <p className='text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center px-2'>
              Please choose a password that hasn&apos;t been used before. Must be at least 8 characters.
            </p>
            <Form
              method="POST"
              className='grid grid-cols-1 gap-4'
            >
    
              <TextField
                type="password"
                name="password"
                label="Password"
                placeholder="New password"
                required={true}
                autoFocus={true}
              />

              <Button
                type="submit"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting" ? (
                  <CircularProgress size="small" />
                ) : (
                  "Reset Password"
                )}
              </Button>
            </Form>
          </div>

          <p className='mt-auto mx-auto text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-bodyMedium lg:mx-0'>
            &copy; 2024 All rights reserved
          </p>
        </div>

        <div className='hidden img-box lg:block lg:relative lg:rounded-large'>
          <img
            src={banner}
            alt=""
            className='img-cover'
          />
          <p className='absolute bottom-10 left-12 right-12 z-10 text-displayLarge font-semibold leading-tight
          text-right text-light-onSurface drops-shadow-sm 2xl:text-[72px]'>
            Chat with Phoenix to supercharge your ideas.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {navigation.state === "loading" && (
          <LinearProgress classes='absolute top-0 left-0 right-0' />
        )}
      </AnimatePresence>
    </>
  )
}

export default ResetPassword
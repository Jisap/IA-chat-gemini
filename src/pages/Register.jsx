import React, { useEffect } from 'react'
import PageTitle from '../components/PageTitle'
import { Link, Form, useNavigation, useActionData } from 'react-router-dom'
import { logoDark, logoLight, banner } from '../assets/assets'
import TextField from '../components/TextField'
import { Button } from '../components/Button'
import { CircularProgress, LinearProgress } from '../components/Progress'
import { useSnackbar } from '../hooks/useSnackbar'
import { AnimatePresence } from 'framer-motion'


const Register = () => {

  const error = useActionData();      // Usa el hook useActionData para obtener los datos de la acción
  const navigation = useNavigation(); // Devuelve el objeto de navegación que contiene elementos como goBack, navigate, etc.

  const { showSnackbar } = useSnackbar(); // Hook que nos permite acceder al estado del snackbar

  useEffect(() => {
    if(error?.message){
      showSnackbar({ message: error.message, type: 'error' })
    }
  },[error, showSnackbar])

  return (
    <>
      <PageTitle title="Create an account" />

      <div className='relative w-screen h-dvh p-2 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] lg:gap-2'>
        <div className='flex flex-col p-4'>
          <Link to='/' className='max-w-max mb-auto mx-auto lg:mx-0'>
            <img src={logoLight} alt="logo light" width={133} height={24} className='dark:hidden' />
            <img src={logoDark} alt="logo dark" width={133} height={24} className='hidden dark:block'/>
          </Link>

          <div className='flex flex-col ga-2 max-w-[480px] w-full mx-auto'>
            <h2 className='text-displaySmall font-semibold text-light-onBackground dark:text-dark-onBackground text-center'>
              Create an account
            </h2>
            <p className='text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center px-2'>
              Register today and gain access to powerful tools that will supercharge your ideas.
            </p>
            <Form
              method="POST"
              className='grid grid-cols-1 gap-4'
            >
              <TextField
                type="text"
                name="name"
                label="Full Name"
                placeholder="Full name"
                required={true}
                autoFocus={true}
                //helperText="some helper text"
              />
              <TextField
                type="email"
                name="email"
                label="Email"
                placeholder="Email"
                required={true}
              />
              <TextField
                type="password"
                name="password"
                label="Password"
                placeholder="Enter your password"
                required={true}
              />
              <Button
                type="submit"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting" ? (
                  <CircularProgress size="small" />
                ):(
                  "Create account"
                )}
              </Button>

              <p className='text-bodyMedium text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-center mt-4'>
                Already have an account?
                <Link 
                  to="/login"
                  className='link text-labelLarge inline-block ms-1 text-light-onSurface dark:text-dark-onSurface'
                >
                  Sign in
                </Link>
              </p>
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
        {navigation.state === "loading" &&(
            <LinearProgress classes='absolute top-0 left-0 right-0' />
        )}
      </AnimatePresence>
    </>
  )
}

export default Register
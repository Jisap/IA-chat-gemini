import React from 'react'
import PageTitle from '../components/PageTitle'
import { Link, Form } from 'react-router-dom'
import { logoDark, logoLight, banner } from '../assets/assets'
import TextField from '../components/TextField'
import { Button } from '../components/Button'


const Register = () => {
  return (
    <>
      <PageTitle title="Create an account" />

      <div className='relative w-screen h-dvh p-2 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] lg:gap-2'>
        <div className='flex flex-col p-4'>
          <Link to='/' className='max-w-max mx-auto lg:mx-0'>
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
                classes=''
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
              >
                Create account
              </Button>

              <p>
                Already have an account?
                <Link t
                  to="/login"
                  className=''
                >
                  Sign in
                </Link>
              </p>
            </Form>
          </div>

          <p>
            &copy; 2024 All rights reserved
          </p>
        </div>

        <div>
          <img
            src={banner}
            alt=""
            className='img-cover'
          />
          <p>
            Chat with Phoenix to supercharge your ideas.
          </p>
        </div>
      </div>
    </>
  )
}

export default Register
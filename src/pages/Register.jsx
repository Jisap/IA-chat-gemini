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
        <div>
          <Link>
            <img src={logoLight} alt="logo light" width={133} height={24} />
            <img src={logoDark} alt="logo dark" width={133} height={24} />
          </Link>

          <div>
            <h2>
              Create an account
            </h2>
            <p>
              Register today and gain access to powerful tools that will supercharge your ideas.
            </p>
            <Form
              method="POST"
              className=''
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
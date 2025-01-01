


import React from 'react'
import { IconBtn } from './Button'
import { Link } from 'react-router-dom'
import { logoLight, logoDark } from '../assets/assets'
import Avatar from './Avatar'


const TopAppBar = () => {
  return (
    <header>
      <div>
        <IconBtn 
          icon="menu"
          title="Menu"
        />

        <Link 
          to="/"
          className=''
        >
          <img 
            src={logoLight}
            alt="phoenix logo"
            width={133}
            height={24}
            className='dark:hidden'
          />

          <img
            src={logoDark}
            alt="phoenix logo"
            width={133}
            height={24}
            className='hidden dark:block'
          />
        </Link>
      </div>

      <div className='menu-wrapper'>
        <IconBtn>
          <Avatar name="John Doe" />
        </IconBtn>
      </div>
    </header>
  )
}

export default TopAppBar
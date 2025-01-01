


import React from 'react'
import { IconBtn } from './Button'
import { Link, useNavigation } from 'react-router-dom'
import { logoLight, logoDark } from '../assets/assets'
import Avatar from './Avatar'
import Menu from './Menu'
import MenuItem from './MenuItem'
import { LinearProgress } from './Progress'
import { AnimatePresence } from 'framer-motion'


const TopAppBar = () => {

  const navigation = useNavigation();
  const isNormalLoad = navigation.state === "loading" && !navigation.formData // Checkeamos que el estado sea loading y que no haya datos en el formulario

  return (
    <header className='relative flex justify-between items-center h-16 px-4'>
      <div className='flex items-center gap-1'>
        <IconBtn 
          icon="menu"
          title="Menu"
          classes='lg:hidden'
        />

        <Link 
          to="/"
          className='min-w-max max-w-max h-[24px] lg:hidden'
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

        <Menu classes="">
          <MenuItem labelText="Log out" />
        </Menu>
      </div>

      <AnimatePresence>
        {isNormalLoad && <LinearProgress />}
      </AnimatePresence>
    </header>
  )
}

export default TopAppBar
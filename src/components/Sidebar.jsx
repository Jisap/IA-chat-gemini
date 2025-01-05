import PropTypes from "prop-types"
import Logo from "./Logo"
import { ExtendedFab, IconBtn } from './Button'
import { NavLink } from "react-router-dom"



const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-inner">
          <div className="h-16 grid items-center px-4 mb-4">
            <Logo />
          </div>

          <ExtendedFab 
            href="/"
            text="New chat"
            classes=""
          />

          <div className="overflow-y-auto -me-2 pe-1">
            <p className="text-titleSmall h-9 grid items-center px-4">
              Recent
            </p>
         
            <nav>
              <div className="relative group">
                <NavLink 
                  to=""
                  className="nav-link"
                  title=""
                >
                  <span className="material-symbols-rounded icon-small">chat_bubble</span>
                  <span className="truncate">New conversation</span>
                  <div className="state-layer"></div>
                </NavLink>

                <IconBtn 
                  icon="delete" 
                  size="small" 
                  classes="absolute top-1/2 right-1.5 -translate-y-[10px] z-10 opacity-0 group-hover:opacity-100 group:focus-within:opacity-100 hidden lg:grid" 
                  title="Delete"   
                />
              </div>
            </nav>
          </div>

          <div 
            className="mt-4 h-14 px-4 grid items-center text-labelLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant border-t
            border-light-surfaceContainerHigh dark:border-dark-surfaceContainerHigh truncate">
            &copy; 2024 All rights reserved
          </div>
        </div>
      </div>

      <div className={`overlay`}></div>
    </>
  )
}

export default Sidebar
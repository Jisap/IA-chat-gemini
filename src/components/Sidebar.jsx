import PropTypes from "prop-types"
import Logo from "./Logo"
import { ExtendedFab, IconBtn } from './Button'
import { NavLink } from "react-router-dom"



const Sidebar = () => {
  return (
    <>
      <div className="sidebar active">
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
                  to="new-chat"
                  className="nav-link"
                  title=""
                >
                  <span className="material-symbols-rounded icon-small">chat_bubble</span>
                  <span className="truncate">New conversation</span>
                  <div className="state-layer"></div>
                </NavLink>

                <IconBtn icon="delete" size="small" classes="" title="Delete" />
              </div>
            </nav>
          </div>

          <div>
            &copy; 2024 All rights reserved
          </div>
        </div>
      </div>

      <div className={`overlay active`}></div>
    </>
  )
}

export default Sidebar
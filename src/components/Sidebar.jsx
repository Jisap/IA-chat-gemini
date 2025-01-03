import PropTypes from "prop-types"
import Logo from "./Logo"
import { ExtendedFab, IconBtn } from './Button'
import { NavLink } from "react-router-dom"



const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-inner">
          <div>
            <Logo />
          </div>

          <ExtendedFab 
            href="/"
            text="New chat"
            classes=""
          />

          <div className="">
            <p>Recent</p>
            <nav>
              <div>
                <NavLink 
                  to=""
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

      <div className={`overlay`}></div>
    </>
  )
}

export default Sidebar
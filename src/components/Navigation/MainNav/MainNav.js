import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../Logo/Logo'
import MobileHandler from '../MobileHandler/MobileHandler'
// import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems'
import ErrorHandler from '../../ErrorHandler/ErrorHandler'
import './MainNav.css'

const MainNav = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const errorAcceptHandler = () => {
    setIsOpen(false)
  }

  return (
    <nav className="main-nav">
      <ErrorHandler
        error={isOpen}
        onHandle={errorAcceptHandler}
        msg={'This is only  a demo version to showcase styling'}
      />
      <MobileHandler onOpen={props.onOpenMobileNav} />
      <div className="main-nav__logo">
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>
      <div className="spacer" />
      <ul className="main-nav__items">
        <NavItems isAuth={props.isAuth} onLogout={() => setIsOpen(true)} />
      </ul>
    </nav>
  )
}

export default MainNav

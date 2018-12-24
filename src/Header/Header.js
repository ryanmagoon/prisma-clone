import React from 'react'
import LogoSVG from './LogoImage'
import NavBar from './NavBar'

const Logo = () => (
  <div className="logo-container">
    <LogoSVG />
    <span className="logo-text">Prisma</span>
  </div>
)

export default () => (
  <header className="header">
    <Logo />
    <NavBar />
  </header>
)

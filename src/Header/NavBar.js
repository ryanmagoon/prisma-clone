import React from 'react'

const Link = props => <span className="header-link">{props.children}</span>

const NavBar = () => (
  <nav className="navbar-container">
    <Link>Products</Link>
    <Link>Use Cases</Link>
    <Link>Community</Link>
    <Link>Blog</Link>
    <Link>Sign In</Link>
    <Link>Documentation</Link>
  </nav>
)

export default NavBar
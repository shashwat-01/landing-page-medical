import React from 'react'

function Nav() {
  return (
    <div className="Nav">
      <nav>
        <div className="nav-left">
          <a href="/">BurlyCare</a>
        </div>
        <div className="nav-center">
          <a href="/">ENT</a>
          <a href="/">Gynaecology</a>
          <a href="/">Protolohy</a>
          <a href="/">Urology</a>
        </div>
        <div className="nav-right">
          <button>Log in</button>
        </div>
      </nav>
    </div>
  )
}

export default Nav

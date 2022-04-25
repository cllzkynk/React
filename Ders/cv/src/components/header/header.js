import React from 'react'
import TopMenu from './top-menu'

const Header = () => {
  return (
    <>
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-inverse" role="navigation">
          <div className="navbar-header">
            <button
              type="button"
              id="nav-toggle"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#main-nav"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="#" className="navbar-brand scroll-top logo"
              ><b>Neu Profile</b></a
            >
          </div>
          <div id="main-nav" className="collapse navbar-collapse">
            <TopMenu/>
          </div>
        </nav>
      </div>
    </header>
    <div id="#top"></div>
    </>
  )
}

export default Header
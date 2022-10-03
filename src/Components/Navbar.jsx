import React, { useState } from 'react'
import './navbar.scss';

const Menu = () =>
(
  <>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#works">Our Works</a>
    <a href="#contact">Contact us</a>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="navbar__links">
          <div className="navbar__links-logo">
            <p>Logo</p>
          </div>
          <div className="navbar__links-container">
            <Menu />
          </div>
        </div>
        <div className="navbar__toggle">
          <i className="fas fa-bars" onClick={() => setToggleMenu(!toggleMenu)}></i>
        </div>
      </div>
      {toggleMenu && 
      (
        <div className="navbar__responsive slide-bottom">
          <div className="navbar__responsive-container-links">
            <Menu />
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
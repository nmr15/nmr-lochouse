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
    <a href="#team">Meet our Team</a>
  </>
)

const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 1,
    name: "Services",
    href: "#services",
  },
  {
    id: 1,
    name: "Our Works",
    href: "#works",
  },
  {
    id: 1,
    name: "Contact us",
    href: "#contact",
  },
  {
    id: 1,
    name: "Meet our Team",
    href: "#team",
  },
];

const Navbar = () => {
  const [menu, setMenu] = useState("0px");

  console.log(menu);

  const toggleMenu = () =>
  {
    setMenu("100%")
  };

  return (
    <>
      <div className="navbar" id="home">
        <div className="navbar__links">
          <div className="navbar__links-logo">
            <p>Logo</p>
          </div>
          {navLinks.map((navLink) =>
          {
            const { id, name, href } = navLink;

            return(
              <div className="navbar__links-container" key={id}>
                <a href={href}>{name}</a>
              </div>
            );
          })}
          {/* <div className="navbar__links-container">
            <Menu />
          </div> */}
        </div>
        <div className="navbar__toggle">
          <i className="fas fa-bars" onClick={() => setMenu("100%")}></i>
        </div>
      </div>
      
      
      <div className="navbar__responsive" style={{width: menu}}>
        <p className="navbar__responsive-close" onClick={() => setMenu("0")}>Close</p>
        {navLinks.map((navLink) => {
          const { id, name, href } = navLink;

          return (
            <div className="navbar__responsive-container-links" key={id}>
              <a href={href} onClick={() => setMenu("0")}>{name}</a>
            </div>
          );
        })}
        {/* <div className="navbar__responsive-container-links">
          <Menu />
        </div> */}
      </div>
      
    </>
  )
}

export default Navbar
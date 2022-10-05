import React from 'react'
import './footer.scss';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__contact">
          <h3 className="footer__h3">Contact</h3>
          <div className="footer__content">
            <div className="footer__contact-top">
              <p className="footer__p">T: +1 234 567 8901</p>
              <p className="footer__p">F: +1 234 567 8902</p>
              <p className="footer__p">E: email@address.com</p>
            </div>
            <div className="footer__contact-bottom">
              <p className="footer__p">A: 9999 Fairplex Dr, Pomona CA</p>
            </div>
          </div>
        </div>
        <div className="footer__services">
          <h3 className="footer__h3">Our Services</h3>
          <div className="footer__content footer__links">
            <a href="#services" className="footer__p">Architecture and Interor</a>
            <a href="#services" className="footer__p">Project Planning</a>
            <a href="#services" className="footer__p">Product Design</a>
            <a href="#services" className="footer__p">Custom Solutions</a>
          </div>
        </div>
        <div className="footer__link">
          <h3 className="footer__h3">Links</h3>
          <div className="footer__content footer__links">
            <a href="#about" className="footer__a">About</a>
            <a href="#services" className="footer__a">Services</a>
            <a href="#works" className="footer__a">Our Works</a>
            <a href="#contact" className="footer__a">Contact</a>
            <a href="#team" className="footer__a">Our Team</a>
          </div>
        </div>
        <div className="footer__subscribe">
          <div className="footer__subscribe-top">
            <h3 className="footer__h3">Subscribe</h3>
            <div className="footer__content">
              <p className="footer__p">In ut faucibus dolor. Etiam ac elementum orci. Sed ut.</p>
              <input type="text" className="footer__input" placeholder="Your Email"/>
            </div>
          </div>
          <div className="footer__subsribe-bottom">
            <h3 className="footer__h3">Follow us</h3>
            <div className="footer__content">
              <a href="#" className="footer__a"><i class="fab fa-facebook-f footer__i"></i></a>
              <a href="#" className="footer__a"><i class="fab fa-instagram footer__i"></i></a>
              <a href="#" className="footer__a"><i class="fab fa-twitter footer__i"></i></a>
              <a href="#" className="footer__a"><i class="fab fa-linkedin-in footer__i"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
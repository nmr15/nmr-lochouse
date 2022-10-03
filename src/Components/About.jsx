import React from 'react'
import './about.scss';
import aboutImg from '../assets/about.jpg';

const About = () => {
  return (
    <>
      <section className="section__about section__padding" id="about">
        <div className="about">
          <div className="about__left">
            <h1 className="about__left-h1">Vestibulum lorem urna faucibus sed dapibus a viverra id.</h1>
            <p className="about__left-p">Nulla velit est, convallis sit amet commodo ut, suscipit.</p>
            <a href="#" className="btn btn-black">Discover more</a>
          </div>
          <div className="about__right">
            {/* <p>right</p> */}
            <img src={aboutImg} alt="about" className="about__right-img" />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
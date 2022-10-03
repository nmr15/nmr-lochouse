import React from 'react'
import './service.scss';
import rightArrowIcon from '../assets/right-arrow-icon.png';

const Service = () => {
  return (
    <>
      <section className="section__services section__padding" id="services">
        <div className="services">
          <div className="services__header">
            <p className="services__header-p">What we can offer</p>
            <h1 className="services__header-h1">Our Services</h1>
          </div>
          <div className="services__content">
            <div className="services__content-item services__content-grid-1">
              <i class="fas fa-pencil-ruler"></i>
              <h3 className="services__content-item-h3">Architecture and Interior</h3>
              <p className="services__content-item-p">Nulla id enim aliquet, porttitor dui facilisis, iaculis.</p>
              <a href="#" className="services__content-item-a">Learn more</a>
            </div>
            <div className="services__content-item services__content-grid-2">
              <i class="fas fa-rocket"></i>
              <h3 className="services__content-item-h3">Project Planning</h3>
              <p className="services__content-item-p">Nulla id enim aliquet, porttitor dui facilisis, iaculis.</p>
              <a href="#" className="services__content-item-a">Learn more</a>
            </div>
            <div className="services__content-item services__content-grid-3">
              <i class="fas fa-object-ungroup"></i>
              <h3 className="services__content-item-h3">Product Design</h3>
              <p className="services__content-item-p">Nulla id enim aliquet, porttitor dui facilisis, iaculis.</p>
              <a href="#" className="services__content-item-a">Learn more</a>
            </div>
            <div className="services__content-item services__content-grid-4">
              <i class="fas fa-lightbulb"></i>
              <h3 className="services__content-item-h3">Custom Solutions</h3>
              <p className="services__content-item-p">Nulla id enim aliquet, porttitor dui facilisis, iaculis.</p>
              <a href="#" className="services__content-item-a">Learn more</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service
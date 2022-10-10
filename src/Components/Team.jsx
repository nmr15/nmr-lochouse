import React from 'react'
import './team.scss';

const Team = () => {
  return (
    <>
      <section className="section__team section__padding" id="team">
        <div className="team">
          <div className="team__content">
            <h2 className="team__content-h2">Meet the team</h2>
            <h3 className="team__content-h3">Save your time and money by choosing out professional team</h3>
            <p className="team__content-p">Vestibulum enim felis, auctor eget arcu a, mattis viverra libero. Suspendisse tincidunt eget justo quis vestibulum. Quisque viverra.</p>
            <a href="#" className="btn btn-black team__content-btn">See all members</a>
          </div>
          <div className="team__image">
            <div className="team__image-1">
              <img src="" alt="" className="team__image-img" />
              <h4 className="team__image-name">Howard Bender</h4>
              <p className="team__image-position">Position</p>
              <p className="team__image-desc">Vestibulum ante ipsum primis in faucibus orci</p>
            </div>
            <div className="team__image-2">
              <img src="" alt="" className="team__image-img" />
              <h4 className="team__image-name">Elinor Townsend</h4>
              <p className="team__image-position">Position</p>
              <p className="team__image-desc">Vestibulum ante ipsum primis in faucibus orci</p>
            </div>
            <div className="team__image-3">
              <img src="" alt="" className="team__image-img" />
              <h4 className="team__image-name">Chase Delaney</h4>
              <p className="team__image-position">Position</p>
              <p className="team__image-desc">Vestibulum ante ipsum primis in faucibus orci</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
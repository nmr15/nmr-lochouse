import React, { useState, useEffect } from 'react'
import "./carousel.css";

const projectList = [
  {
    id: 1,
    title: 'Project 1',
    image: 'https://drive.google.com/uc?id=1eMwCFWYPRwkK4wkQSn4p5buWMfw9POAi',
  },
  {
    id: 2,
    title: 'Project 2',
    image: 'https://drive.google.com/uc?id=1WOtppME_1WjJo_1CNS49ZHjjastN_DnP',
  },
  {
    id: 3,
    title: 'Project 3',
    image: 'https://drive.google.com/uc?id=1zLmMAGxI2qiVzabJmf0-DeWb2sG6IaZE',
  },
];



const Carousel = () => {
  const [projects, setProjects] = useState(projectList);
  const [index, setIndex] = useState(0);

  console.log('project length: ' + projects.length);
  console.log('Index is ' + index);

  useEffect(() =>
  {
    const lastIndex = projects.length - 1;
    if(index < 0)
    {
      setIndex(lastIndex);
    }
    if(index > lastIndex)
    {
      setIndex(0)
    }
  }, [index, projects]);

  return (
    <>
      <section className="section__carousel section__padding">
        <h1 className="section__heading-1">Our Works</h1>
        <div className="carousel">
          {projects.map((project, projectIndex) => {
            const { id, title, image } = project;

            let position = 'nextSlide';
            if (projectIndex === index) {
              position = 'activeSlide';
            }
            if (projectIndex === index - 1 || (index === 0 && projectIndex === projects.length - 1)) {
              position = 'lastSlide'
            }

            // console.log('Project index: ' + projectIndex)

            return (
              <article className={position + ' carousel__inner'} key={id}>
                <img src={image} alt={title} className="carousel__img" />
              </article>
            );
          })}
        </div>
        <div className="carousel__arrow">
          {/* <button className="prev" onClick={() => setIndex(index - 1)}> */}
            <i class="fas fa-chevron-left carousel__arrow-left" onClick={() => setIndex(index - 1)}></i>
          {/* </button> */}
          {/* <button className="next" onClick={() => setIndex(index + 1)}> */}
            <i class="fas fa-chevron-right carousel__arrow-right" onClick={() => setIndex(index + 1)}></i>
          {/* </button> */}
        </div>
      </section>
      
    </>
  )
}

export default Carousel
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Col, Row } from 'react-bootstrap';
import AppDevChart from '../assets/img/AppDevChart.png';
import BackEndChart from '../assets/img/BackEndChart.png';
import DatabaseChart from '../assets/img/DatabaseChart.png';
import FrontEndChart from '../assets/img/FrontEndChart.png';
import GameChart from '../assets/img/GameChart.png';
import ProgChart from '../assets/img/ProgChart.png';
import Untitled from '../assets/img/Untitled.png';
import GitChart from '../assets/img/GitChart.png';
import { useInView } from 'react-intersection-observer';


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const MyCarousel = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  console.log("MyCarousel is rendering");
  return (

    <section className='skill' id='skills'>
      <div
        ref={ref}
        className={`slide-in ${inView ? 'visible' : ''}`}
      ></div>
      <div className={`slide-in ${inView ? 'visible' : ''}`} >
        <div className='skill-bx' >
          <h2>MY SKILLS</h2>
          <hr />
          <p>
            As a junior software developer, I possess a solid foundation in software development principles and practices. These are some of my technical skills
          </p>
          <span className='skill-desc'>MY SKILLS INCLUDE:</span>
          <hr />
          <Carousel responsive={responsive} infinite={true} className='skill-slider'>
            <div className='item'>
              <img src={Untitled} alt='Web Development' />
              <h5>Web Development</h5>
              <h6>REACT.JS / HTML-CSS-SCCS / WORDPRESS / TAILWIND / BOOTSTRAP</h6>
            </div>
            <div className='item'>
              <img src={AppDevChart} alt='App Development' />
              <h5>App Development</h5>
              <h6>REACT-NATIVE / FLUTTER</h6>
            </div>
            <div className='item'>
              <img src={ProgChart} alt='Programming Languages' />
              <h5>Programming Languages</h5>
              <h6>JAVA / JAVASCRIPT / PYTHON / C# / C++</h6>
            </div>
            <div className='item'>
              <img src={FrontEndChart} alt='Frontend Development' />
              <h5>Frontend Development</h5>
              <h6>HTML-CSS / REACT / ANGULAR / VUE</h6>
            </div>
            <div className='item'>
              <img src={BackEndChart} alt='Backend Development' />
              <h5>Backend Development</h5>
              <h6>DJANGO / PHP / NODE.JS / SPRINGBOOT</h6>
            </div>
            <div className='item'>
              <img src={DatabaseChart} alt='Programming Languages' />
              <h5>Database</h5>
              <h6>MYSQL / MONGODB</h6>
            </div>
            <div className='item'>
              <img src={GameChart} alt='Frontend Development' />
              <h5>Game Development</h5>
              <h6>UNREAL ENGINE</h6>
            </div>
            <div className='item'>
              <img src={GitChart} alt='Backend Development' />
              <h5>Version Control</h5>
              <h6>GIT / GITHUB</h6>
            </div>

          </Carousel>




        </div>
      </div>
    </section>

  );
};


export default MyCarousel;



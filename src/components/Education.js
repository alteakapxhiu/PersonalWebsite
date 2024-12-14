import React from 'react';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1,    // Trigger when 10% of the element is in view
  });

  return (

    <div
      ref={ref}
      className={`slide-in ${inView ? 'visible' : ''}`}
    >
      <div className='container'>
        <span className="education">EDUCATION</span>
        <span className="experience">EXPERIENCE</span>
      </div>

      <hr />
      <ul className="timeline-1 text-black">
        <li className="event" data-date="2020 - 2023">
          <h4 className="mb-3">High-School</h4>
          <p>
            Graduated from "Petronini Luarasi High School" with a certificate of excellence.
          </p>
        </li>
        <li className="event" data-date="2023 - 2026">
          <h4 className="mb-3 pt-3">Bachelor of Computer Science</h4>
          <p>
            POLIS UNIVERSITY
          </p>
        </li>
        <li className="event" data-date="2026 - 2028">
          <h4 className="mb-3 pt-3">Software Engineering</h4>
          <p>CIT</p>
        </li>
        <li className="event" data-date="2026 - 2028">
          <h4 className="mb-3 pt-3">Software Engineering</h4>
          <p>CIT</p>
        </li>

      </ul>
    </div>
  );
};

export default Education;

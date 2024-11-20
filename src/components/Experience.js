import React from "react";
import { useInView } from 'react-intersection-observer';
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1,    // Trigger when 10% of the element is in view
  });

  return (
    <MDBContainer className="py-5">
      <MDBRow>
        <MDBCol md="12">
          <div id="content" className="phonestyles">
            <ul
              ref={ref}
              className={`timeline-2 ${inView ? 'slide-in' : ''}`}
            >
              <li className="event" data-date="Jun 2023 - Dec 2024">
                <h4 className="mb-3">Front End Developer</h4>
                <p>
                  New-Wisdom Foreign Languages center
                </p>
              </li>
              <li className="event" data-date="Jan 2024 - Apr 2024">
                <h4 className="mb-3 pt-3">Web-Developer</h4>
                <p>
                  Fancy Summer Sea View Apartments
                </p>
              </li>
              <li className="event" data-date="Sept 2024 - Nov 2024">
                <h4 className="mb-3 pt-3">React Native Developer</h4>
                <p>
                  POS.AL
                </p>
              </li>
              <li className="event" data-date="00 - 00">
                <h4 className="mb-3 pt-3">CS</h4>
                <p className="mb-0">
                  ...
                </p>
              </li>
            </ul>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Experience;

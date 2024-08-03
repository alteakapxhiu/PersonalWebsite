import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import Button from "react-bootstrap";

export const Banner = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });

    const toRotate = ["a Software Developer", "an App Developer", "a Web Developer", "studying Computer Science"];
    const [loopNum, setLoopNum] = useState(0); // Number of repetitions
    const [isDeleting, setIsDeleting] = useState(false); // Whether the text is being deleted
    const [text, setText] = useState(''); // Current text
    const [delta, setDelta] = useState(300 - Math.random() * 100); // Time between each character
    const period = 1000; // Time between each word

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text, delta]);

    const tick = () => {
        let i = loopNum % toRotate.length; // Current word index
        let fullText = toRotate[i]; // Current full word
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1); // Update text

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <section className="banner" id="home">
               <div
        ref={ref}
        className={`slide-in ${inView ? 'visible' : ''}`}
      >
      </div>
            <Container className={`slide-in ${inView ? 'visible' : ''}`}>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Personal Portfolio!</span>
                        <h1>
                            Hi! My Name is Altea! I'm <span className="movingText">{text}</span>
                        </h1>
                        <p className="try">
                            I'm a Computer Science student with a passion for web and app development. Proficient in languages such as JavaScript, Python, and Java, and experienced with frameworks like React and Django. Skilled in building user-friendly, responsive websites using HTML, CSS, and React as well as mobile applications using tools like React Native and Android Studio. Adept at problem-solving and constantly seeking to learn and innovate in the tech industry.
                            <br /><br />
                            As a dedicated computer science student, I am eager to leverage my programming skills to create efficient applications. Alongside software development, I have a keen interest in exploring cybersecurity, game development, data science, and network administration. My goal is to learn and adapt in the tech landscape, contributing to impactful projects and advancing my career and experience.
                          </p> <a href="mailto:alteakapxhiu@gmail.com?subject=Let’s%20Connect&body=Hello%2C%0D%0AI%20would%20like%20to%20connect%20with%20you.%0D%0A%0D%0AThank%20you.">
                <button className="vvd"><span>Let’s Connect</span></button>
              </a> 
                                      
              </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src="https://user-images.githubusercontent.com/74038190/219923809-b86dc415-a0c2-4a38-bc88-ad6cf06395a8.gif" alt="Header img" />
                    </Col>
                </Row>
                
            </Container>
        </section>
    );
};

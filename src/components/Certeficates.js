import { Col,Container,Tab,Nav,Row} from 'react-bootstrap';
import { ProjectsCard } from './ProjectsCard';
import CODEJEWELS from '../assets/img/CODEJEWELS.jpeg';
import Konferenca from '../assets/img/Konferenca.jpeg';
import FinalDiploma from '../assets/img/FinalDiploma.jpeg';
import CSHARP from '../assets/img/CSHARP.png';
import Python from '../assets/img/Python.jpeg';
import { useInView } from 'react-intersection-observer';



export const Certeficates = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });
    

    const projects = [
        {
          title: "LEARN PYTHON 3",
          description: "CODEACADEMY",
          imgUrl: Python,
          url: "https://alteakapxhiu.github.io/Interactive-Shop-Business-Website/"
        },
        {
          title: "FULL-STACK DEVELOPMENT",
          description: "Albanian ICT Academy",
          imgUrl: 'https://albanianictacademy.com/wp-content/uploads/2024/01/logo-transparent.png',
          url: "https://alteakapxhiu.github.io/CalculatorApp/"
        },
        {
            title: "Foundational C# with Microsoft Certification Exam",
            description: "Microscoft & FreeCodeCamp  ",
          imgUrl: CSHARP,
          url: "https://www.freecodecamp.org/certification/AlteaKapxhiu/foundational-c-sharp-with-microsoft"
        }
      ];
      
     const  projects1 = [
        {
          title: "Participation in the Student’s Computer Science Conference “Digital Pioneers in the Transformation Era",
          description: "POLIS UNIVERSITY",
          imgUrl: Konferenca,
          url: "https://www.youtube.com/watch?v=9TDUVcv2_yM"
        },
        {
            title: "In Progress..",
            description: "Undergoing Design & Development",
          imgUrl: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L3JtNTU4LWVsZW1lbnRzLXdvcmQtMDEteC5qcGc.jpg',
          url: ""
        },
        {
            title: "In Progress..",
            description: "Undergoing Design & Development",
          imgUrl: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L3JtNTU4LWVsZW1lbnRzLXdvcmQtMDEteC5qcGc.jpg',
          url: ""
        },
    
      
      ];
      const  projects2 = [
        {
            title: "Winning Certificate of Leadership Hackathon",
            description: "Albanian ICT Academy",
            imgUrl: CODEJEWELS,
            url: "https://my.certifyme.online/verify/07a449dc17682"
        },
            {
            title: "In Progress..",
            description: "Undergoing Design & Development",
          imgUrl: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L3JtNTU4LWVsZW1lbnRzLXdvcmQtMDEteC5qcGc.jpg',
          url :''
        },
        {
            title: "In Progress..",
            description: "Undergoing Design & Development",
          imgUrl: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L3JtNTU4LWVsZW1lbnRzLXdvcmQtMDEteC5qcGc.jpg',
          url: ""
        },
    
      
      ];
      const  projects3 = [
        {
            title: "FINAL DIPLOMA OF ENGLISH LANGUAGE",
            description: "New Wisdom",
          imgUrl: FinalDiploma ,
          url: "https://credential.certifyme.online/verify/18387c4d17717"
        },
        {
            title: "FINAL TEST B2 LEVEL FRENCH ",
            description: "Golden Future",
          imgUrl: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L3JtNTU4LWVsZW1lbnRzLXdvcmQtMDEteC5qcGc.jpg',
          url: ""
        },
        {
            title: "In Progress..",
            description: "Undergoing Design & Development",
          imgUrl: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L3JtNTU4LWVsZW1lbnRzLXdvcmQtMDEteC5qcGc.jpg',
          url: ""
        },
    
      
      ];

    return(
        <section className="project" id="Certefications">
           <div
            ref={ref}
            className={`slide-in ${inView ? 'visible' : ''}`}
             >
           </div>
            <Container className={`slide-in ${inView ? 'visible' : ''}`}>
                <Row>
                    <Col>
                    <h2>MY PERSONAL CERTIFICATES</h2>
                    <hr/>
                    <p>
This section showcases a collection of my personal certificates. Each certificate is represented by a card that includes an image, title, and brief description.</p>
<Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="first">SKILL RELATED CERTIFICATES</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">WOKSHOPS & CONFERENCES</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third" >
                            COMPETITIONS
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fourth" >
                           Foreign Languages
                            </Nav.Link>
                        </Nav.Item>
                        </Nav>
                        <hr/>
                        <Tab.Content>
                         <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project,index) => {
                                        return (
                                            <ProjectsCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Row>
                                {
                                    projects1.map((project,index) => {
                                        return (
                                            <ProjectsCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <Row>
                                {
                                    projects2.map((project,index) => {
                                        return (
                                            <ProjectsCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                            <Row>
                                {
                                    projects3.map((project,index) => {
                                        return (
                                            <ProjectsCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}
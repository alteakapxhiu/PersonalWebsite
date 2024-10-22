import { Col,Container,Tab,Nav,Row} from 'react-bootstrap';
import { ProjectsCard } from './ProjectsCard';
import CODEJEWELS from '../assets/img/CODEJEWELS.jpeg';
import Konferenca from '../assets/img/Konferenca.jpeg';
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
          imgUrl: 'https://www.freecodecamp.org/news/content/images/2023/08/Microsoft-C-Sharp-Certification-1.png',
          url: ""
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
            url: "https://drive.google.com/file/d/1yQ3SgqzyiOzElYax2A2O3ajLg84A8oPg/view"
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
This section showcases a collection of my personal projects. Each project is represented by a card that includes an image, title, and brief description.</p>
<Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="first">SKILL RELATED CERTEFICATES</Nav.Link>
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
                            OTHER
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
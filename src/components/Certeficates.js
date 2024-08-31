import { Col,Container,Tab,Nav,Row} from 'react-bootstrap';
import { ProjectsCard } from './ProjectsCard';
import CODEJEWELS from '../assets/img/CODEJEWELS.jpeg';
import Konferenca from '../assets/img/Konferenca.jpeg';
import Italian from '../assets/img/Italian.png';
import FinalDiploma from '../assets/img/FinalDiploma.jpeg';
import CSHARP from '../assets/img/CSHARP.png';
import BackendAltea from '../assets/img/BackendAltea.jpg';
import Stefora from '../assets/img/Stefora.png';
import Pioneers from '../assets/img/Pioneers.png';
import Python from '../assets/img/Python.jpeg';
import { useInView } from 'react-intersection-observer';



export const Certeficates = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });
    

    const projects = [
      {
        title: "Foundational C# with Microsoft Certification Exam",
        description: "Microscoft",
      imgUrl: CSHARP,
      url: "https://www.freecodecamp.org/certification/AlteaKapxhiu/foundational-c-sharp-with-microsoft"
    },
        {
          title: "LEARN PYTHON 3",
          description: "CODEACADEMY",
          imgUrl: Python,
          url: "https://alteakapxhiu.github.io/Interactive-Shop-Business-Website/"
        },
        {
          title: "Back End Development and APIs",
          description: "FreeCodeCamp  ",
        imgUrl: BackendAltea,
        url: "https://www.freecodecamp.org/certification/AlteaKapxhiu/foundational-c-sharp-with-microsoft"
      },
        {
          title: "FULL-STACK DEVELOPMENT",
          description: "Albanian ICT Academy",
          imgUrl: 'https://albanianictacademy.com/wp-content/uploads/2024/01/logo-transparent.png',
          url: "https://alteakapxhiu.github.io/CalculatorApp/"
        },
        
  
      ];
      
     const  projects1 = [
      {
        title: "FINAL DIPLOMA OF ENGLISH LANGUAGE  LEVEL C2",
        description: "New Wisdom",
      imgUrl: FinalDiploma ,
      url: "https://credential.certifyme.online/verify/18387c4d17717"
    },
    {
      title: "Final Test Level A2 Italian",
      description: "New Wisdom",
    imgUrl: Italian ,
    url: "",
  },
    {
        title: "FINAL TEST B2 LEVEL FRENCH ",
        description: "Golden Future",
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
          title: "Digital Pioneers in the Transformation Era",
          description: "Conference by Polis University",
          imgUrl: Pioneers,
          url: "https://drive.google.com/file/d/1DFUoNjv2qEnZ5lTQPWHlIXHF9RAVKlMm/view?usp=sharing"
        },
        {
            title: "Digital Citizenship, STEM Engagement and Sustainability",
            description: "Workshop by Polis University & Stefora Project",
          imgUrl: Stefora,
          url: "https://drive.google.com/file/d/1c21LW2At_2xQdOlJkbH3jLZcjG48PRYy/view?usp=sharing"
        },
        {
            title: "In Progress..",
            description: "Undergoing Design & Development",
          imgUrl: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L3JtNTU4LWVsZW1lbnRzLXdvcmQtMDEteC5qcGc.jpg',
          url: ""
        },
       
    
      
      ];

    return(
        <section className="project" id="Certifications">
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
                            <Nav.Link eventKey="first">PROGRAMMING CERTIFICATIONS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">ACADEMIC CERTIFICATIONS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third" >
                            COMPETITIONS
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fourth" >
                            WOKSHOPS & CONFERENCES
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
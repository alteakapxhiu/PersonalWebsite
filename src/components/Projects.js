import { Col, Container, Tab, Nav, Row } from 'react-bootstrap';
import { ProjectsCard } from './ProjectsCard';
import AlisaGlide from '../assets/img/AlisaGlide.jpeg';
import Portfolio from '../assets/img/Portfolio.png';
import Fancy from '../assets/img/Fancy.jpeg';
import GifStats from '../assets/img/GifStats.gif';
import Jewellery from '../assets/img/Jewellery.jpeg'
import MysticAlbania from '../assets/img/MysticAlbania.png';
import Calulator from '../assets/img/Calulator.png';
import TaskproApp from '../assets/img/TaskproApp.jpeg';
import Campus from '../assets/img/Campus.jpeg';
import New_Wisdom_Web from '../assets/img/New_Wisdom_Web.png';
import POLISMART from '../assets/img/POLISMART.png';
import WorkGo_UI from '../assets/img/WorkGo_UI.png';
import PersonalPortfolio from '../assets/img/PersonalPortfolio.png';
import ChatbotCD from '../assets/img/ChatbotCD.png';
import Qr_Generator from '../assets/img/Qr_Generator.png';
import { useInView } from 'react-intersection-observer';


export const Projects = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const projects = [
    {
      title: "New Wisdom Foreign Language Center Website",
      description: "A website showcasing language courses and services offered by New Wisdom Foreign Language Center.",
      imgUrl: New_Wisdom_Web,
      url: "https://newisdomcenter.vercel.app/"
    },
    {
      title: "MYSTIC ALBANIA",
      description: "Tourism Website for Albania developed using React.js & Bootstrap ",
      imgUrl: MysticAlbania,
      url: "https://alteakapxhiu.github.io/MysticAlbania/"
    },
    {
      title: "WORDPRESS WEBSITE",
      description: "Fancy Sea View Apartment website developed using WordPress",
      imgUrl: Fancy,
      url: "https://fancysummerseaview1.wordpress.com/"
    },
    {
      title: "MY PERSONAL PORTFOLIO",
      description: "My personal portfolio created using React.js, Bootstrap & Express ",
      imgUrl: PersonalPortfolio,
      url: "/"
    },
    {
      title: "INTERACTIVE BUSINESS WEBSITE",
      description: "A jewellery website responsive template designed and developed for shops/businesses to showcase and sell their products.",
      imgUrl: Jewellery,
      url: "https://alteakapxhiu.github.io/Jewelry-E-Commerce-Website/"
    }
  ];

  const projects1 = [
    {
      title: "TO DO  & AGENDA APP TASKPRO ",
      description: "Todo List and Agenda tracking app using React-Native,Node.js & Expo",
      imgUrl: TaskproApp,
      url: "https://github.com/alteakapxhiu/TaskPro"
    },
    {
      title: "POLIS SMART CAMPUS",
      description: "IOT DEVICE MANAGEMENT APP FOR UNIVERSITY SPACE",
      imgUrl: POLISMART,
      url: "https://github.com/alteakapxhiu/PolisApp"
    },
    {
      title: "ALISA COSMETICS",
      description: "Cosmetics Store App using Glide",
      imgUrl: AlisaGlide,
      url: "https://alisacosmetics.glide.page/dl/home"
    },
  ];
  const projects2 = [
    {
      title: "Virtual University Campus Simulation",
      description: "A recreation of Polis-University campus into a VR version using Unreal Engine",
      imgUrl: Campus,
      url: "https://www.youtube.com/watch?v=5dXgW0DyCNk"
    },
    {
      title: "FIGMA Mobile App UI",
      description: "A sleek and user-friendly employee management app interface designed in Figma.",
      imgUrl: WorkGo_UI,
      url: 'https://www.figma.com/design/QENL3J4BdNwicXGvvcDJaJ/workgo?node-id=2009-447&t=qs1bznCzNVDSpK8G-1'
    },
    {
      title: "In Progress..",
      description: "Undergoing Design & Development",
      imgUrl: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L3JtNTU4LWVsZW1lbnRzLXdvcmQtMDEteC5qcGc.jpg',
      url: ""
    },


  ];
  const projects3 = [
    {
      title: "Python QR GENERATOR & PDF CONVERTER TOOL",
      description: "A simple and efficient tool for generating QR codes and converting PDFs using Python.",
      imgUrl: Qr_Generator,
      url: "https://github.com/alteakapxhiu/PythonProject"
    },
    {
      title: "Python Open Domain Chatbot",
      description: "An AI-powered chatbot using the OpenAI API to engage in open-domain conversations.",
      imgUrl: ChatbotCD,
      url: "https://github.com/alteakapxhiu/ChatBotCD"
    },
    {
      title: "Javascript Calculator App",
      description: "A Simple calculator App created using Javascript.",
      imgUrl: Calulator,
      url: "https://alteakapxhiu.github.io/CalculatorApp/"
    },

  ];

  return (
    <section className="project" id="projects">
      <div
        ref={ref}
        className={`slide-in ${inView ? 'visible' : ''}`}
      >
      </div>
      <Container className={`slide-in ${inView ? 'visible' : ''}`}>
        <Row>
          <Col >

            <img src={GifStats} class="responsive-img" alt="Stats"
            />



            <h2>MY PERSONAL PROJECTS</h2>
            <hr />
            <p> This section features my personal projects, showcasing a diverse range of applications and solutions that reflect my expertise in software development, creativity, and problem-solving across various domains. </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" >
                <Nav.Item>
                  <Nav.Link eventKey="first">Web Development</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Mobile Apps & IoT Solutions</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" >
                    Game development & UI/UX Design
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth" >
                    Software Tools & Utilities
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <hr />
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
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
                      projects1.map((project, index) => {
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
                      projects2.map((project, index) => {
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
                      projects3.map((project, index) => {
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
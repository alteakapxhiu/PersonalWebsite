import { Col,Container,Tab,Nav,Row} from 'react-bootstrap';
import { ProjectsCard } from './ProjectsCard';
import Glide from '../assets/img/Glide.png';
import Portfolio from '../assets/img/Portfolio.png';
import Fancy from '../assets/img/Fancy.png';
import { useInView } from 'react-intersection-observer';


export const Projects = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


    const projects = [
        {
          title: "INTERACTIVE BUSINESS WEBSITE",
          description: "A jewellery website responsive template designed and developed for shops/businesses to showcase and sell their products.",
          imgUrl: 'https://camo.githubusercontent.com/4a9f31372f75370039d44e0f1360abc15019209f1c936f423ec16e18566a8601/68747470733a2f2f692e706f7374696d672e63632f3032797a474853352f436f7665722d416c6973612d4a6577656c732d312e706e67',
          url: "https://alteakapxhiu.github.io/Interactive-Shop-Business-Website/"
        },
        {
          title: "CALCULATOR APP",
          description: "A Simple calculator App created using Javascript.",
          imgUrl: 'https://camo.githubusercontent.com/2dd14060c9ae199ceb8f9908cf026bb83a97df399cd7d8469f6763813edf9ab9/68747470733a2f2f692e696d67686970706f2e636f6d2f66696c65732f4e36546233313732303337343539372e706e67',
          url: "https://alteakapxhiu.github.io/CalculatorApp/"
        },
        {
            title: "MY PERSONAL PORTFOLIO",
            description: "My personal portfolio created using REACT",
          imgUrl: Portfolio,
          url: ""
        },
        {
          title: "WORDPRESS WEBSITE",
          description: "Fancy Sea View Apartment website developed using WordPress",
        imgUrl: Fancy,
        url: "https://fancysummerseaview1.wordpress.com/"
      }
      ];
      
     const  projects1 = [
        {
          title: "TaskPro ",
          description: "Todo and Agenda tracking app using React-Native",
          imgUrl: 'https://camo.githubusercontent.com/5210087be01853a0bb4663a81eb1ba59121f8c026b7a5f740b89de1228967949/68747470733a2f2f692e696d67686970706f2e636f6d2f66696c65732f6d355a354a313732313737383333332e6a7067',
          url: "https://www.youtube.com/watch?v=9TDUVcv2_yM"
        },
        {
            title: "Alisa Cosmetics",
            description: "Cosmeics Store App using Glide",
          imgUrl: Glide,
          url: "https://alisacosmetics.glide.page/dl/home"
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
            title: "Virtual University Campus Simulation",
            description: "A recreation of Polis-University campus into a VR version using Unreal Engine",
            imgUrl: 'https://camo.githubusercontent.com/9b5e555d445fa1fcb375b858d622997f147eadad64c69788f3a5716d5e890e3b/68747470733a2f2f692e696d67686970706f2e636f6d2f66696c65732f426c45744c313732323031383831372e6a7067',
            url: "https://www.youtube.com/watch?v=5dXgW0DyCNk"
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
        <section className="project" id="projects">
           <div
            ref={ref}
            className={`slide-in ${inView ? 'visible' : ''}`}
             >
           </div>
            <Container className={`slide-in ${inView ? 'visible' : ''}`}>
                <Row>
                    <Col>
                    <h2>MY PERSONAL PROJECTS</h2>
                    <hr/>
                    <p>
This section showcases a collection of my personal projects. Each project is represented by a card that includes an image, title, and brief description.</p>
<Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" >
                        <Nav.Item>
                            <Nav.Link eventKey="first">WEB PROJECTS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">MOBILE APP PROJECTS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third" >
                            GAME DESIGN
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
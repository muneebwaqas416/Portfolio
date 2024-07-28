import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import AuthSite from "../assets/img/Screenshot 2024-07-27 at 4.57.02 PM.png"
import FullPrimal from "../assets/img/Screenshot 2024-07-27 at 4.53.15 PM.png"
import Ecommerce from "../assets/img/Screenshot 2024-07-27 at 5.40.45 PM.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import HaksoChatbot from '../assets/img/img4.png'
import Eleva from '../assets/img/img5 (1).png'
import { Link } from "react-router-dom";

export const Projects = () => {

  const project1 = [
    {
      title: "Hakso Chatbot",
      description: "A full-stack MERN web application designed for English teaching, incorporating JWT authentication, Stripe API for payment processing, and OpenAI API for interactive learning experiences.",
      imgUrl: HaksoChatbot,
      link : "https://go.screenpal.com/watch/cZitlDVPk7d"
    },
    {
      title: "Eleva AI",
      description: "A full-stack MERN application tailored for English pronunciation and vocabulary enhancement, featuring JWT authentication, Google Sign-Up/Login integration, and OpenAI API for advanced learning tools.",
      imgUrl: Eleva,
      link: "https://example.com/eleva-ai",
    },
    {
      title: "Croton.ai",
      description: "A landing page built with NextJS for Croton.ai, designed to provide a modern, responsive interface with optimized loading times and SEO-friendly architecture.",
      imgUrl: projImg3,
      link: "https://croton.ai/",
    }
  ]
  const project2 = [
    {
      title: "Full Primal",
      description: "A dieting platform utilizing OpenAI Assistant API and Firebase for backend functionality, offering personalized diet plans and tracking to help users achieve their fitness goals.",
      imgUrl: FullPrimal,
      link: "https://fullprimal.ai/",
    },
    {
      title: "Authentication System",
      description: "An authentication system leveraging Firebase for secure and efficient user authentication, providing seamless integration with various web applications.",
      imgUrl: AuthSite,
      link: "https://authenticatesitemuneeb.web.app/",
    },
    {
      title: "Ecommerce Store",
      description: "An ecommerce platform featuring a CMS backend, ReactJS frontend, Redux for state management and Stripe API for payments. This application offers a seamless shopping experience with real-time updates and efficient state handling.",
      imgUrl: Ecommerce,
      link: "https://www.veed.io/view/6e78cab7-968a-4aad-8bdc-f795d3b30c35?panel=share",
    },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I specialize in creating dynamic, full-stack web applications 
                  using the MERN stack, ReactJS, TypeScript, and Firebase. 
                  My projects range from a document signing app using Node.js PDF 
                  libraries to educational chatbots integrated with OpenAI APIs, 
                  showcasing my expertise in JWT authentication, API integrations, 
                  and secure deployment on platforms like Heroku and Vercel.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          project1.map((project, index) => {
                            return (
                                  <ProjectCard
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
                          project2.map((project, index) => {
                            return (
                              <ProjectCard
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
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="" src={colorSharp2}></img>
    </section>
  )
}

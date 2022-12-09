import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/p-1.jpeg";
import projImg2 from "../assets/img/p-2.jpeg";
import projImg3 from "../assets/img/p-3.jpeg";
import projImg4 from "../assets/img/p-4.jpeg";
import projImg5 from "../assets/img/p-5.jpeg";
import projImg6 from "../assets/img/p-6.jpeg";
import projImg7 from "../assets/img/p-7.jpeg";
import projImg8 from "../assets/img/p-8.jpeg";
import projImg9 from "../assets/img/p-9.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Element Management",
      url: "https://elementmanagement.mx/",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "IKAE",
      url: "https://ikae-furniture.vercel.app/",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Uber Partners",
      url: "https://partnersdrivers.vercel.app/",
      description: "Development",
      imgUrl: projImg3,
    },
    {
      title: "travelGuide",
      url: "https://dribbble.com/shots/14346973-Daily-UI-008-404-Page",
      description: "Design",
      imgUrl: projImg4,
    },
    {
      title: "rentaBike",
      url: "https://dribbble.com/shots/14172444-Daily-UI-001-Sign-Up",
      description: "Design",
      imgUrl: projImg5,
    },
    {
      title: "amphora",
      url: "https://dribbble.com/shots/14186301-Daily-UI-003-Landing-Page",
      description: "Design",
      imgUrl: projImg6,
    },
    {
      title: "tinDog",
      url: "https://tin-dog-page.vercel.app/",
      description: "Design & Development",
      imgUrl: projImg7,
    },
    {
      title: "Maytech Seguridad",
      url: "https://maytechseguridad.com/",
      description: "Design & Development",
      imgUrl: projImg8,
    },
    {
      title: "Proyecto Mujeres",
      url: "https://proyectomujeres.org/",
      description: "Design & Development",
      imgUrl: projImg9,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>A proposal according to your objectives, focused on the user experience.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import decorbunny from "../../Assets/Projects/decorbunny.jpg";
import imdbclone from "../../Assets/Projects/imdbclone.jpg";
import madadgar from "../../Assets/Projects/madadgar.jpg";
import smartschool from "../../Assets/Projects/smartschool.png";
import gymso from "../../Assets/Projects/gymso.jpg";
import beeahead from "../../Assets/Projects/beeahead.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartschool}
              isBlog={false}
              title="Smart School"
              description="A smart school management system that automates attendance, dress code inspections and other routine activites in a school. It consists of three mobile apps built using react native and two web apps built MERN. I have developed this project with my colleague as our FYP at COMSATS University Islamabad"
              link="https://github.com/Malikusman5959/Smart-Teacher-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={decorbunny}
              isBlog={false}
              title="Decor Bunny"
              description="An fully responsive online printing and decoration store built using MERN. The customers select their photos, edit them using the built in editor and upload them to place their order. It has all the ECOM functionalities like cart, product listing, reviews and order management."
              link="https://github.com/Malikusman5959/DecorBunnyWebsite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={madadgar}
              isBlog={false}
              title="Madadgar"
              description="A skill based hiring platform built using MERN where anyone can hire anybody with specific skill(s) for a job. The website has a QA portal, Chat App using socket.io, Profile picture validation and many other functionalities. "
              link="https://github.com/Malikusman5959/Madadgar-Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={beeahead}
              isBlog={false}
              title="BeeAhead"
              description="An online Restaurant reservation and marquee booking website built using MERN. The customers can book a table in any restaurant in advance, can order food in advance for takeaway and book a marquee well ahead of time."
              link="https://github.com/Malikusman5959/BeeAhead-Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gymso}
              isBlog={false}
              title="GYMSO Website"
              description="A gym management website developed with hmtl, css, bootstrap and php. It has signup, signin pages, equipment management pages, user management pages, trainer management pages and a stunning landing page designed with core html and css."
              link="https://github.com/Malikusman5959/GYMSO-Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imdbclone}
              isBlog={false}
              title="IMDB Clone"
              description="A clone of IMDB built using MERN. A customer can search for a movie, add a review, and rate it. "
              link="https://github.com/Malikusman5959/IMDB-Clone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

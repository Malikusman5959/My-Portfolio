import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
} from "react-icons/di";
import { SiJava, SiCss3, SiHtml5, SiNextdotjs , SiTailwindcss, SiRedux, SiDotnet, SiMysql, SiBootstrap} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus /> <p style={{fontSize : '15px'}}>C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> <p style={{fontSize : '15px'}}> Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /> <p style={{fontSize : '15px'}}>Node Js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> <p style={{fontSize : '15px'}}>React Js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux /> <p style={{fontSize : '15px'}}>Redux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs/> <p style={{fontSize : '15px'}}>Next Js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss/> <p style={{fontSize : '15px'}}>Tailwind Css</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /> <p style={{fontSize : '15px'}}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql/> <p style={{fontSize : '15px'}}>MySql</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /> <p style={{fontSize : '15px'}}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJava /> <p style={{fontSize : '15px'}}>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet /> <p style={{fontSize : '15px'}}>.Net</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 /> <p style={{fontSize : '15px'}}>CSS3</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap /> <p style={{fontSize : '15px'}}>Bootstrap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 /> <p style={{fontSize : '15px'}}>HTML5</p>
      </Col>
    </Row>
  );
}

export default Techstack;

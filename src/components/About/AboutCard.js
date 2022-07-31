import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Usman Amjad </span>
            from <span className="purple"> Islamabad, Pakistan.</span>
            <br />I am a graduate of 2022 from COMSATS University Islamabad in Software Engineering.
            <br />
            <br />
           I have worked on following languages and web technologies during my student life and development career:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight style={{color : '#C770F0'}} /> Java, C++, C#, Python and javascript
            </li>
            <li className="about-activity">
              <ImPointRight style={{color : '#C770F0'}} /> HTML, CSS, Bootstrap, TailwindCSS, Material UI, Redux
            </li>
            <li className="about-activity">
              <ImPointRight style={{color : '#C770F0'}} /> .Net, Node js, Express js, React js, Next js and React Native
            </li>
            <li className="about-activity">
              <ImPointRight style={{color : '#C770F0'}} /> MySql and Mongodb
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Running online businesses
            </li>
            <li className="about-activity">
              <ImPointRight /> Making Tech Vlogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

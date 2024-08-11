import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { ImPointRight } from "react-icons/im";
import Github from "../About/AboutCard";
import Toolstack from "../About/Toolstack";
import Techstack from "../About/Techstack";
import Aboutcard from "../About/AboutCard";
import laptopImg from "../../Assets/about.png";
import { CgCPlusPlus } from "react-icons/cg";
import {
  Java,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

import Home2 from "../Home/Home2";

function Skills() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>

        <
        /Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
          React Native and Artificial Intelligence
        </h1>
        <Container fluid className="Languages">
          <h2>Coding Languages</h2>
          <div><ImPointRight/> C++
            </div>
            <div><ImPointRight/> Java
              </div>
              <div><ImPointRight/> Python
                </div>
                <div><ImPointRight/> Javascript
                  </div>
                  <div><ImPointRight/> R for data science</div>

        </Container>

        <Container fluid className="Languages">
          <h2>Backend Frameworks</h2>
          <div><ImPointRight/>
          </div>
          <div><ImPointRight/>Spring boot
          </div>
          <div><ImPointRight/>Node.js
          </div>
          <div><ImPointRight/>Django
          </div>


        </Container>


        <Container fluid className="Languages">
          <h2>Frontend Frameworks</h2>
          <div><ImPointRight/>
          </div>
          <div><ImPointRight/>Vanilla js
          </div>
          <div><ImPointRight/>React and next.js
          </div>
          <div><ImPointRight/>Vue.js
          </div>


        </Container>
        <Container fluid className="Languages">
          <h2>Databses</h2>
          <div><ImPointRight/>Mongodb
          </div>
          <div><ImPointRight/>Mysql  and Mariadb
          </div>
          <div><ImPointRight/>Postgress
          </div>

          <Container fluid className="Languages">
            <h2>Cloud Computing</h2>
            <div><ImPointRight/>
              Amazon web services
            </div>
            <div><ImPointRight/>Firebase
            </div>




          </Container>




        </Container>




        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>


      </Container>
    </Container>


  );
}

export default Skills;

import React from "react";
import { Col, Row } from "react-bootstrap";
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

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>
      <Col  style={{ 
        height:'20px',width:"50px"}}
      xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>


      <Col    style={{ height:'20px',width:"50px"}}     xs={8} md={2} className="tech-icons">
        <p>Nex.js</p>

      </Col>

      <Col  style={{ height:'20px',width:"50px"}}  xs={4} md={2} className="tech-icons">
        <p>React Native</p>

      </Col>
      <Col       style={{ height:'20px',width:"50px"}}     xs={4} md={2} className="tech-icons">
        <p>Java</p>

      </Col>




      <Col    style={{ height:'20px',width:"50px"}}       xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

      <Col   style={{ height:'20px',width:"50px"}}      xs={4} md={2} className="tech-icons">
        <p>MERN Stack </p>
      </Col>
      <Col  style={{ height:'20px',width:"50px"}}        xs={4} md={2} className="tech-icons">
        A.I
      </Col>
      <Col  style={{ height:'20px',width:"50px"}}              xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col    style={{ height:'20px',width:"50px"}}                        xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col  style={{ height:'20px',width:"50px"}}                             xs={4} md={2} className="tech-icons">
        <>Python</>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
    </Row>
  );
}

export default Techstack;

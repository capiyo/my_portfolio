import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi There, I am <span className="purple">Engineer Capiyo </span>
            from <span className="purple">Nairobi Kenya</span>
            <br />Am a  degree holder in Information technology (IT) major in Software Engineering
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading  science Books
            </li>
            <li className="about-activity">
              <ImPointRight />Solving complex algorithims in Hackarrank and Leetcode
            </li>
            <li className="about-activity">
              <ImPointRight />Solving Mathematics problems  and eletronics
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Dreams never come true, we chase them"{" "}
          </p>
          <footer className="blockquote-footer">Eng.Capiyo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

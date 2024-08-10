import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Java,android,Spring boot",
          "Deep Learning Engineer And AI in general ",
          "MERN Stack Developer and React Native",
          "Linux,cyber security",
          "Python,Django,flask and Data science"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 200,
      }}
    />
  );
}

export default Type;

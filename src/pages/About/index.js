import React from "react";
import "../../pages/About/about.css";
import DevConsoleLive from "../../components/DevConsoleLive.jsx";
function About() {
  return (
    <div className="aboutContainer">
      <div className="copy">
        <h2>The bx to the flo</h2>
        <p>
          Buenas! I’m Bexi — a product engineer from Panamá with a passion for
          building. My multidisciplinary background in UI/UX design, product
          engineering, and user‑centered strategy allows me to craft thoughtful
          digital experiences across web and mobile.
        </p>
        <p>
        I’m currently part of the Memphis Grizzlies Marketing Technology team,
        where I build products and experiences that elevate fan engagement and
        streamline internal workflows.
      </p>
        <p>
          My approach to product engineering is shaped by curiosity, intention,
          and a love for deciphering complex digital problems through my own
          lens. I enjoy creating systems and experiences that feel intuitive,
          purposeful, and thoughtful.
        </p>
        <p>
         When I’m not in bx/flo mode, you’ll probably find me playing sports, drawing, traveling, or falling down a YouTube rabbit hole — lately I’ve been obsessed with watching people ride luxury trains LOL.
        </p>
      </div>
      <div className="console">
        <DevConsoleLive />
      </div>
    </div>
  );
}

export default About;

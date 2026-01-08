import React from "react";
import { projects } from "../../data/projects";
import { ProjectCard } from "../../components/ProjectCard";

export const Projects = () => {
  return (
    <div className="container">
      <h2 style={{}}>bx/grizzlies</h2>
      <div
        style={{
          display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1rem",
        }}
      >
        {projects.map((proj) => (
          <ProjectCard key={proj.slug} project={proj} />
        ))}
      </div>
      <hr />
      <div
        style={{
          paddingTop: "1rem",
        }}
      >
        <h3
          style={{
            paddingBottom: ".5rem",
          }}
        >
          More Builds By Me
        </h3>
        <div
          style={{
            paddingTop: "1rem",
            display: "grid",
            gap: ".5rem",
          }}
        >
          <a
            href="https://www.nba.com/grizzlies/schedule"
            target="_blank"
            rel="noreferrer"
          >
            /Schedule →
          </a>
          <a
            href="https://www.nba.com/grizzlies/single-game-tickets"
            target="_blank"
            rel="noreferrer"
          >
            /Single Game Tickets →
          </a>
          <a
            href="https://www.nba.com/grizzlies/watch"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            /Watch →
          </a>
          {/* <a
            href="https://www.nba.com/grizzlies/nba-cup"
            target="_blank"
            rel="noreferrer"
          >
            /NBA Cup →
          </a> */}
        </div>
      </div>
    </div>
  );
};
export default Projects;

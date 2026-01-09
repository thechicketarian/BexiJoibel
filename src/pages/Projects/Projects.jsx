import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { projects } from "../../data/projects";
import { ProjectCard } from "../../components/ProjectCard";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  const gridRef = useRef(null);

useEffect(() => {
  const cards = gridRef.current?.querySelectorAll(".project-card");
  if (!cards || !cards.length) return;

  gsap.fromTo(
    cards,
    { y: 12, opacity: 1 },
    {
      y: 0,
      duration: 0.35,
      ease: "power2.out",
      stagger: {
        each: 0.08,
        from: "center",
      },
      delay: 0.8, // ← this is the magic
    }
  );
}, []);


  return (
    <div className="projectsWrapper">
      <div className="header">
        <div>
          <h2>bx/grizzlies</h2>
          <h4>March 2023-Current</h4>
        </div>
        <div>
          <p className="project-description"> A multi‑season ecosystem of curated solutions I’ve built for the
            Memphis Grizzlies. These projects represent the core systems I’ve
            designed and engineered—spanning schedule architecture, ticketing
            flows, and mobile experiences—and reflect the depth of my work and
            how my role has grown season after season. Go Grizz! 
          </p>
        </div>
      </div>
      <hr/>
      <div
      className="projects"
      ref={gridRef}
      >
        {projects.map((proj) => (
          <ProjectCard key={proj.slug} project={proj} />
        ))}
      </div>
    </div>
  );
};
export default Projects;



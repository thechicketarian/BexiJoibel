import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { projects } from "../../data/projects";
import "./ProjectPage.css";

export const ProjectPage = () => {
  const { slug } = useParams();
  const { hash } = useLocation();   // <-- HOOKS MUST BE AT THE TOP

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  if (!project) return <div>Project not found.</div>; // <-- SAFE NOW

  return (
    <div className="container">
      <h2>{project.title}</h2>
      <div className="project-links">
        {project.links.map((link, i) => (
          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </div>

      <h2>Behind the Build</h2>
      <div
        className="project-description"
        dangerouslySetInnerHTML={{ __html: project.longDescription }}
      />

      {project.embed && (
        <div
          className="project-embed"
          dangerouslySetInnerHTML={{ __html: project.embed }}
        />
      )}

      <div className="project-images">
        {project.images.map((img, i) => (
          <img key={i} src={img} alt="" />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;

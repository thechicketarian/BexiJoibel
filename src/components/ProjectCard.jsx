import React from "react";
import { Link } from "react-router-dom";

export const ProjectCard = ({ project }) => {
  return (
    <div
    className="project-card"
      style={{
        border: "1px solid #1e1e1e",
        // borderRadius: "12px",
        padding: "1.5rem 2rem",
        background: "#121212",
        color: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {/* {project.images?.[0] && (
        <div
          style={{
            width: "100%",
             height: "200px",
            borderRadius: "8px",
            backgroundImage: `url(${project.images[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        />
      )} */}

      <h3 style={{ margin: 0 }}>{project.title}</h3>
      <p style={{ margin: 0, padding:0}}>{project.shortDescription}</p>

      <Link
        to={`/projects/${project.slug}`}
        style={{
          marginTop: "auto",
          fontWeight: 600,
        }}
      >
        learn more <span className="wiggle-star" style={{color:"#c3ff00"}}>→</span> 
      </Link>
    </div>
  );
};

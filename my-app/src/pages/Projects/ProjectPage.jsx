import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";

export const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div>Project not found.</div>;

  return (
    <div className="container" style={{ padding: "3rem", color: "#f5f5f5" }}>
      <h2>{project.title}</h2>
      <p style={{ maxWidth: "800px" }}>{project.longDescription}</p>
      {/* Links */}
      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", marginBottom:"1rem" }}>
        {project.links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.5rem 1.25rem",
              border: "1px solid #fff",
              color: "#fff",
              fontWeight: 600,
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
      {project.embed && (
        <div
          className="project-embed"
          dangerouslySetInnerHTML={{ __html: project.embed }}
        />
      )}
      {/* Images */}
      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
        {project.images.map((img, i) => (
          <div style={{ width: "400px" }}>
            <img
              key={i}
              src={img}
              alt=""
              style={{
                width: "100%",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectPage;

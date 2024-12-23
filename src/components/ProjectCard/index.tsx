import { Project } from '../../types';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import './index.css';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div
      id="project-card"
      className="card border border-dark rounded shadow-sm hover-shadow h-100"
    >
      {project.url ? (
        <a href={project.url} target="_blank" rel="noreferrer">
          <img
            src={require(`../../data/${project.image}`)}
            alt={project.imageAltText}
            className="card-img-top img-fluid rounded shadow"
          />
        </a>
      ) : (
        <img
          src={require(`../../data/${project.image}`)}
          alt={project.imageAltText}
          className="card-img-top img-fluid rounded shadow"
        />
      )}

      <div className="card-body d-flex flex-column">
        <h5 className="fs-4 fw-bold mb-3 text-center">{project.name}</h5>

        <p className="card-text text-secondary fs-6 mb-4 text-center">
          {project.description}
        </p>

        <hr />

        {(project.githubUrl ||
          project.url ||
          project.backEndUrl ||
          project.frontEndUrl ||
          project.devpostUrl) && (
          <div className="d-flex flex-column flex-md-row justify-content-center gap-2 mb-3">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark d-flex align-items-center justify-content-center w-100 w-md-auto"
              >
                <FaGlobe className="me-1" />
                Live Site
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark d-flex align-items-center justify-content-center w-100 w-md-auto"
              >
                <FaGithub className="me-1" />
                GitHub Repository
              </a>
            )}
            {project.devpostUrl && (
              <a
                href={project.devpostUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark d-flex align-items-center justify-content-center w-100 w-md-auto"
              >
                <FaGlobe className="me-1" />
                Devpost Listing
              </a>
            )}

            {project.frontEndUrl && (
              <a
                href={project.frontEndUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark w-50 d-flex align-items-center justify-content-center"
              >
                <FaGithub className="me-1" />
                Front-end Repository
              </a>
            )}

            {project.backEndUrl && (
              <a
                href={project.backEndUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark w-50 d-flex align-items-center justify-content-center"
              >
                <FaGithub className="me-1" />
                Back-end Repository
              </a>
            )}
          </div>
        )}

        <p className="text-muted fst-italic mb-3 text-center">
          Authors: {project.authors.join(', ')}
        </p>

        <div className="d-flex flex-wrap justify-content-center gap-2">
          {project.tags.map((tagName) => (
            <span className="badge bg-secondary">{tagName}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

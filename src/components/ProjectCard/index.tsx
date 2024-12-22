import { Project } from '../../types';
import Tag from './Tag';
import { FaGithub, FaGlobe } from 'react-icons/fa';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div
      id="project-card"
      className="card border border-dark rounded shadow w-25"
    >
      {project.url ? (
        <a href={project.url ?? ''} target="_blank" rel="noreferrer">
          <img
            src={require(`../../data/${project.image}`)}
            alt={project.imageAltText}
            className="card-img-top"
          />
        </a>
      ) : (
        <img
          src={require(`../../data/${project.image}`)}
          alt={project.imageAltText}
          className="card-img-top"
        />
      )}

      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <p className="card-text">{project.description}</p>

        <hr />

        {(project.githubUrl || project.url) && (
          <div className="card-text d-flex gap-2 mb-2">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark"
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
                className="btn btn-outline-dark"
              >
                <FaGithub className="me-1" />
                GitHub Repository
              </a>
            )}
          </div>
        )}

        <p className="card-text">Authors: {project.authors.join(', ')}</p>

        {project.tags.map((tagName) => (
          <Tag tagName={tagName} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;

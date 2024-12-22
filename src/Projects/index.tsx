import React from 'react';
import ProjectCard from 'components/ProjectCard';
import { projects } from '../projectsData';
import { Project } from 'types';

const chunkProjects = (arr: Project[], chunkSize: number) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

export default function Projects() {
  const projectsPerSlide = 3;
  const groupedProjects = chunkProjects(projects, projectsPerSlide);

  return (
    <div className="border border-dark rounded pt-2 pb-2 pl-4 pr-4 bg-white">
      <div
        id="projectCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {groupedProjects.map((_, index) => (
            <button
              type="button"
              data-bs-target="#projectCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : undefined}
              aria-label={`Slide ${index + 1}`}
              key={index}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {groupedProjects.map((projectGroup, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              key={index}
            >
              <div className="d-flex justify-content-center align-items-center w-100">
                {projectGroup.map((project: Project) => (
                  <div className="card-container" key={project.id}>
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#projectCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;charset=UTF8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 16 16'%3E%3Cpath d='M11.354 1.354a.5.5 0 0 1 0 .707L5.207 8l6.147 6.146a.5.5 0 0 1-.708.708l-6.5-6.5a.5.5 0 0 1 0-.708l6.5-6.5a.5.5 0 0 1 .708 0z'/%3E%3C/svg%3E\")",
              backgroundSize: '100%',
              width: '40px',
              height: '40px',
            }}
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#projectCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;charset=UTF8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 16 16'%3E%3Cpath d='M4.646 1.354a.5.5 0 0 0 0 .707L10.793 8l-6.147 6.146a.5.5 0 0 0 .708.708l6.5-6.5a.5.5 0 0 0 0-.708l-6.5-6.5a.5.5 0 0 0-.708 0z'/%3E%3C/svg%3E\")",
              backgroundSize: '100%',
              width: '40px',
              height: '40px',
            }}
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

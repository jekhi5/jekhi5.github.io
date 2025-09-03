import ProjectCard from './ProjectCard';
import { projects } from '../../projectsData';
import './index.css';

export default function Projects() {
  return (
    <div id="project-page" className="container">
      <h1 className="text-center mb-4">Projects</h1>
      <div className="row g-4">
        {projects
          .slice()
          .reverse()
          .map((project) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
      </div>
    </div>
  );
}

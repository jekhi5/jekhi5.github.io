import { projects } from '../projectsData';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <ul>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </ul>
  );
}

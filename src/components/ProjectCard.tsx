import { Project } from '../types';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div>
      Project name: {project.name}
      Authors: {project.authors.toString()}
    </div>
  );
};

export default ProjectCard;

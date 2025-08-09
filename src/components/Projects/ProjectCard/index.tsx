import { Project } from "../../../types";
import "./index.css";
import DynamicButtonGroup from "./DynamicButtonGroup";

const ProjectCard = ({ project }: { project: Project }) => {
	return (
		<div
			id="project-card"
			className="card border border-dark rounded shadow-sm hover-shadow position-relative"
		>
			{project.url || project.githubUrl ? (
				<a
					href={project.url ?? project.githubUrl}
					target="_blank"
					rel="noreferrer"
				>
					<img
						src={require(`../../../data/${project.image}`)}
						alt={project.imageAltText}
						className="card-img-top img-fluid rounded shadow"
					/>
				</a>
			) : (
				<img
					src={require(`../../../data/${project.image}`)}
					alt={project.imageAltText}
					className="card-img-top img-fluid rounded shadow"
				/>
			)}

			<div className="card-body d-flex flex-column">
				<h5 className="fs-4 fw-bold mb-3 text-center">{project.name}</h5>

				<p className="card-text text-secondary fs-6 mb-4 text-center truncated-description">
					{project.description}
				</p>

				<p className="card-text text-secondary fs-6 mb-4 text-center full-description">
					{project.description}
				</p>

				<hr />

				{(project.githubUrl ||
					project.url ||
					project.backEndUrl ||
					project.frontEndUrl ||
					project.devpostUrl ||
					project.caseStudyUrl) && <DynamicButtonGroup project={project} />}

				<p className="text-muted fst-italic mb-3 text-center">
					Authors: {project.authors.join(", ")}
				</p>

				<div className="tags d-flex flex-wrap justify-content-center">
					{project.tags.map((tagName) => (
						<span className="badge bg-secondary">{tagName}</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;

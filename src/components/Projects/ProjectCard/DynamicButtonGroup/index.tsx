import { useEffect, useRef } from 'react';
import { FaApple, FaFilePdf, FaGithub, FaGlobe } from 'react-icons/fa';
import { Project } from 'types';

const DynamicButtonGroup = ({ project }: { project: Project }) => {
    const buttonGroupRef = useRef<HTMLDivElement>(null);

    const applyDynamicRounding = () => {
        const buttonGroup = buttonGroupRef.current;
        if (!buttonGroup) return;

        const buttons = buttonGroup.querySelectorAll('.btn');
        buttons.forEach((button) => {
            button.classList.remove('rounded-start', 'rounded-end');
        });

        let currentTop: number | null = null;
        let lineButtons:
            | Element[]
            | { classList: { add: (arg0: string) => void } }[] = [];

        buttons.forEach((button) => {
            const rect = button.getBoundingClientRect();
            if (currentTop === null) {
                currentTop = rect.top;
            }

            if (rect.top !== currentTop) {
                if (lineButtons.length) {
                    lineButtons[0].classList.add('rounded-start');
                    lineButtons[lineButtons.length - 1].classList.add(
                        'rounded-end',
                    );
                }

                lineButtons = [];
                currentTop = rect.top;
            }

            lineButtons.push(button);
        });

        if (lineButtons.length) {
            lineButtons[0].classList.add('rounded-start');
            lineButtons[lineButtons.length - 1].classList.add('rounded-end');
        }
    };

    useEffect(() => {
        applyDynamicRounding();

        window.addEventListener('resize', applyDynamicRounding);

        return () => {
            window.removeEventListener('resize', applyDynamicRounding);
        };
    }, []);

    return (
        <div
            className="btn-group d-flex flex-wrap justify-content-center"
            ref={buttonGroupRef}
        >
            {project.url && (
                <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-dark d-flex align-items-center justify-content-center"
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
                    className="btn btn-outline-dark d-flex align-items-center justify-content-center"
                >
                    <FaGithub className="me-1" />
                    GitHub Repository
                </a>
            )}
            {project.frontEndUrl && (
                <a
                    href={project.frontEndUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-dark d-flex align-items-center justify-content-center"
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
                    className="btn btn-outline-dark d-flex align-items-center justify-content-center"
                >
                    <FaGithub className="me-1" />
                    Back-end Repository
                </a>
            )}
            {project.caseStudyUrl && (
                <a
                    href={project.caseStudyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-dark d-flex align-items-center justify-content-center"
                >
                    <FaFilePdf className="me-1" />
                    Case Study
                </a>
            )}
            {project.devpostUrl && (
                <a
                    href={project.devpostUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-dark d-flex align-items-center justify-content-center"
                >
                    <FaGlobe className="me-1" />
                    Devpost Listing
                </a>
            )}
            {project.appleUrl && (
                <a
                    href={project.appleUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-dark d-flex align-items-center justify-content-center"
                >
                    <FaApple className="me-1" />
                    App Store Listing
                </a>
            )}
        </div>
    );
};

export default DynamicButtonGroup;

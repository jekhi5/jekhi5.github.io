import '../index.css';
import './index.css';
import { Work } from '../../../../types';
import { formatMonthYear } from '../../../../utils/dateFormatters';

const WorkCard = ({ work }: { work: Work }) => {

    return (
        <div className="work-item">
            <div className="work-item-header">
                {work.logo && (
                    <a
                        href={work.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="company-link"
                    >
                        <div className="logo-container">
                            <img
                                src={require(`../../../../data/imageData/${work.logo}`)}
                                alt={`${work.company} logo`}
                                className="logo"
                            />
                        </div>
                    </a>
                )}
                <div className="company-details">
                    <h3 className="role">{work.role}</h3>

                    <a
                        href={work.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="company-link"
                    >
                        <p className="company">{work.company}</p>
                    </a>

                    <p className="duration">
                        {formatMonthYear(work.startDate)} -{' '}
                        {work.endDate ? formatMonthYear(work.endDate) : 'Present'}
                    </p>
                </div>
            </div>
            <div className="item-body">
                <ul>
                    {work.bullets.map((bullet, index) => (
                        <li className="description" key={index}>
                            {bullet}
                        </li>
                    ))}
                </ul>

                <ul className="technologies">
                    {work.tags.map((tech, index) => (
                        <li key={index} className="technology">
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WorkCard;

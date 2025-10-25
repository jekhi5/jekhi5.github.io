import '../index.css';
import './index.css';
import { Work } from '../../../../types';

const WorkCard = ({ work }: { work: Work }) => {
    // 2 is added to the date because the `Date` class accepts dates as indexed
    // 0-11 (January - December) and this correctly displays the intended date on front end
    const formatDate = (date: Date) =>
        `${date.getMonth() + 2}/${date.getFullYear()}`;

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
                        {formatDate(work.startDate)} -{' '}
                        {work.endDate ? formatDate(work.endDate) : 'Present'}
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

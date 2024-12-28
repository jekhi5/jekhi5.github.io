import './index.css';
import { Work } from '../../../types';

const WorkCard = ({ data }: { data: Work }) => {
  return (
    <div className="work-item">
      <div className="work-item-header">
        {data.logo && (
          <a
            href={data.companyUrl}
            target="_blank"
            rel="noreferrer"
            className="company-link"
          >
            <div className="logo-container">
              <img
                src={require(`../../../data/${data.logo}`)}
                alt={`${data.company} logo`}
                className="company-logo"
              />
            </div>
          </a>
        )}
        <div className="company-details">
          <a
            href={data.companyUrl}
            target="_blank"
            rel="noreferrer"
            className="company-link"
          >
            <h3 className="company">{data.company}</h3>
          </a>
          <p className="role">{data.role}</p>
          <p className="duration">
            {data.startDate} - {data.endDate ?? 'Present'}
          </p>
        </div>
      </div>
      <div className="work-item-body">
        <ul>
          {data.bullets.map((bullet, index) => (
            <li className="description" key={index}>
              {bullet}
            </li>
          ))}
        </ul>

        <ul className="technologies">
          {data.tags.map((tech, index) => (
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

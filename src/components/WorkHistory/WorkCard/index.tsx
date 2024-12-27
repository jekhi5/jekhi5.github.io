import './index.css';
import { Work } from '../../../types';

const WorkCard = ({ data }: { data: Work }) => {
  return (
    <div className="work-item">
      <div className="work-item-header">
        <h3 className="company">{data.company}</h3>
        <p className="role">{data.role}</p>
        <p className="duration">{data.duration}</p>
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
          {data.technologies.map((tech, index) => (
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

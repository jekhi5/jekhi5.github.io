import { workData } from '../../workData';
import WorkCard from './WorkCard';
import './index.css';

export default function WorkHistory() {
  return (
    <div className="work-history">
      <h2 className="title">Work History</h2>
      <div className="timeline">
        {workData.map((item, index) => (
          <WorkCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

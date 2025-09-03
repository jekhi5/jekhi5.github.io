import { useState } from 'react';
import WorkCard from './WorkCard';
import './index.css';
import { FaBriefcase, FaLaptopCode } from 'react-icons/fa';
import { technicalWorkData } from 'technicalWorkData';
import { WorkType } from './WorkType';
import { additionalWorkData } from 'additionalWorkData';

export default function WorkHistory() {
  const [filter, setFilter] = useState(WorkType.Technical);

  return (
    <div className="work-history">
      <h2>Work Experience</h2>
      <div className="filters">
        <button
          className={`filter-button ${
            filter === WorkType.Technical ? 'active' : ''
          }`}
          onClick={() => setFilter(WorkType.Technical)}
        >
          <FaLaptopCode className="me-1" />
          Technical Work
        </button>
        <button
          className={`filter-button ${
            filter === WorkType.Additional ? 'active' : ''
          }`}
          onClick={() => setFilter(WorkType.Additional)}
        >
          <FaBriefcase className="me-1" />
          Other Work
        </button>
      </div>
      <div className="work-items">
        {(filter === WorkType.Technical
          ? technicalWorkData
          : additionalWorkData
        )
          .slice()
          .reverse()
          .map((item) => (
            <WorkCard key={item.company} data={item} />
          ))}
      </div>
    </div>
  );
}

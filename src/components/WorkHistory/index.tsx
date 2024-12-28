import { useState } from 'react';
import { workData } from '../../workData';
import WorkCard from './WorkCard';
import './index.css';
import { FaBriefcase, FaLaptopCode } from 'react-icons/fa';

export default function WorkHistory() {
  const [filter, setFilter] = useState('technical');

  const filteredData = workData
    .filter((item) => item.type === filter)
    .sort((a, b) => {
      return b.endDate
        ? new Date(b.endDate).getTime() -
            new Date(a.endDate as unknown as string).getTime()
        : new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });

  return (
    <div className="work-history">
      <h2>Work Experience</h2>
      <div className="filters">
        <button
          className={`filter-button ${filter === 'technical' ? 'active' : ''}`}
          onClick={() => setFilter('technical')}
        >
          <FaLaptopCode className="me-1" />
          Technical Work
        </button>
        <button
          className={`filter-button ${filter === 'additional' ? 'active' : ''}`}
          onClick={() => setFilter('additional')}
        >
          <FaBriefcase className="me-1" />
          Other Work
        </button>
      </div>
      <div className="work-items">
        {filteredData.map((item) => (
          <WorkCard key={item.company} data={item} />
        ))}
      </div>
    </div>
  );
}

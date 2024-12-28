import { useState } from 'react';
import { workData } from '../../workData';
import WorkCard from './WorkCard';
import './index.css';
import { FaBriefcase, FaLaptopCode } from 'react-icons/fa';

export default function WorkHistory() {
  const [filter, setFilter] = useState('technical');

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
        {workData
          .filter((work) => work.type === filter)
          .map((item) => (
            <WorkCard key={item.company} data={item} />
          ))}
      </div>
    </div>
  );
}

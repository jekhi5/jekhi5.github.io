import { useState } from 'react';
import WorkCard from './cards/WorkCard';
import './index.css';
import { FaBriefcase, FaLaptopCode, FaRegNewspaper } from 'react-icons/fa';
import { technicalWorkData } from 'data/displayData/technicalWorkData';
import { WorkType } from './WorkType';
import { additionalWorkData } from 'data/displayData/additionalWorkData';
import { certificationsData } from 'data/displayData/certificationsData';
import { Certification, Work } from 'types';
import CertificationCard from './cards/CertificationCard';

export default function WorkHistory() {
    const [filter, setFilter] = useState(WorkType.Technical);

    const items = getItems(filter);

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
                <button
                    className={`filter-button ${
                        filter === WorkType.Certification ? 'active' : ''
                    }`}
                    onClick={() => setFilter(WorkType.Certification)}
                >
                    <FaRegNewspaper className="me-1" />
                    Certifications
                </button>
            </div>
            <div className="item-cards">
                {filter === WorkType.Certification
                    ? items.map((item) => (
                          <CertificationCard
                              key={item.id}
                              cert={item as Certification}
                          />
                      ))
                    : items.map((item) => (
                          <WorkCard key={item.id} work={item as Work} />
                      ))}
            </div>
        </div>
    );
}

function getItems<T extends WorkType>(
    filter: T,
): T extends WorkType.Certification ? Certification[] : Work[] {
    const items =
        filter === WorkType.Additional
            ? additionalWorkData
            : filter === WorkType.Certification
            ? certificationsData
            : technicalWorkData;

    return items.slice().reverse() as any;
}

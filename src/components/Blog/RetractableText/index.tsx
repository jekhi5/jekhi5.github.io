import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './index.css';
import { retractableHeaderType } from 'types';
import {
    DOWN_POINTED_TRIANGLE,
    RIGHT_POINTED_TRIANGLE,
} from 'utils/unicodeMarks';

interface RetractableTextProps {
    type: retractableHeaderType;
    title: string;
    markdown: string;
    startOpen: boolean;
}

export default function RetractableText({
    markdown,
    type,
    title,
    startOpen,
}: RetractableTextProps) {
    const [isExpanded, setIsExpanded] = useState(startOpen);

    const getTypeClass = () => {
        switch (type) {
            case retractableHeaderType.DANGER:
                return 'retractable-danger';
            case retractableHeaderType.SUCCESS:
                return 'retractable-success';
            case retractableHeaderType.NORMAL:
            default:
                return 'retractable-normal';
        }
    };

    const getDefaultTitle = () => {
        if (title) return title;
        switch (type) {
            case retractableHeaderType.DANGER:
                return 'Warning';
            case retractableHeaderType.SUCCESS:
                return 'Success';
            case retractableHeaderType.NORMAL:
            default:
                return 'Info';
        }
    };

    const content = <ReactMarkdown>{markdown}</ReactMarkdown>;

    return (
        <div className={`retractable-box ${getTypeClass()}`}>
            <div
                className="retractable-header"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <span className="retractable-icon">
                    {isExpanded
                        ? DOWN_POINTED_TRIANGLE
                        : RIGHT_POINTED_TRIANGLE}
                </span>
                <span className="retractable-title">{getDefaultTitle()}</span>
            </div>
            {isExpanded && <div className="retractable-content">{content}</div>}
        </div>
    );
}

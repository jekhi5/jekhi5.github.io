import { BlogPost } from 'types';
import { createLocalDate } from 'utils/dateFormatters';
import day1Markdown from './2025/markdown/day1';
import adventOfCodeDialogueBoxes from './dialogueBoxes';

const AdventOfCode2025Posts: BlogPost[] = [
    {
        id: 'aoc-2025-day-1',
        title: 'Advent of Code 2025 - Day 1',
        date: createLocalDate('2025-12-01'),
        summary: 'Solving the first day of Advent of Code 2025 using Python',
        tags: ['Python', 'Algorithms', 'Advent of Code'],
        markdown: day1Markdown,
        prePostDialogueBoxes: [...adventOfCodeDialogueBoxes],
    },
];

export { AdventOfCode2025Posts };

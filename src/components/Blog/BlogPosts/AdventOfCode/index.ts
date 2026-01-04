import { BlogPost } from 'types';
import { createLocalDate } from 'utils/dateFormatters';
import day1Markdown from './2025/markdown/day1';
import day2Markdown from './2025/markdown/day2';
import day3Markdown from './2025/markdown/day3';
import day4Markdown from './2025/markdown/day4';
import adventOfCodeDialogueBoxes from './dialogueBoxes';

const AdventOfCode2025Posts: BlogPost[] = [
    {
        id: 'aoc-2025-day-1',
        title: 'Advent of Code 2025 - Day 1',
        date: createLocalDate('2026-01-03'),
        summary: 'Solving the first day of Advent of Code 2025 using Python',
        tags: ['Python', 'Algorithms', 'Advent of Code'],
        markdown: day1Markdown,
        prePostDialogueBoxes: [...adventOfCodeDialogueBoxes],
    },
    {
        id: 'aoc-2025-day-2',
        title: 'Advent of Code 2025 - Day 2',
        date: createLocalDate('2026-01-03'),
        summary: 'Solving the second day of Advent of Code 2025 using Python',
        tags: ['Python', 'Algorithms', 'Advent of Code'],
        markdown: day2Markdown,
        prePostDialogueBoxes: [...adventOfCodeDialogueBoxes],
    },
    {
        id: 'aoc-2025-day-3',
        title: 'Advent of Code 2025 - Day 3',
        date: createLocalDate('2026-01-03'),
        summary: 'Solving the third day of Advent of Code 2025 using Python',
        tags: ['Python', 'Algorithms', 'Advent of Code'],
        markdown: day3Markdown,
        prePostDialogueBoxes: [...adventOfCodeDialogueBoxes],
    },
    {
        id: 'aoc-2025-day-4',
        title: 'Advent of Code 2025 - Day 4',
        date: createLocalDate('2026-01-04'),
        summary: 'Solving the fourth day of Advent of Code 2025 using Python',
        tags: ['Python', 'Algorithms', 'Advent of Code'],
        markdown: day4Markdown,
        prePostDialogueBoxes: [...adventOfCodeDialogueBoxes],
    },
];

export { AdventOfCode2025Posts };

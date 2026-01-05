import { BlogPost } from 'types';
import { createLocalDate } from 'utils/dateFormatters';
import day1Markdown from './2025/markdown/day1';
import day2Markdown from './2025/markdown/day2';
import day3Markdown from './2025/markdown/day3';
import day4Markdown from './2025/markdown/day4';
import day5Markdown from './2025/markdown/day5';
import day6Markdown from './2025/markdown/day6';
import day7Markdown from './2025/markdown/day7';
import adventOfCodeDialogueBoxes from './dialogueBoxes';

const AdventOfCode2025Posts: BlogPost[] = [
    {
        id: 'aoc-2025-day-1',
        title: 'Advent of Code 2025 - Day 1',
        date: createLocalDate('2026-01-03'),
        summary: 'Keeping track of numbers on an ever rotating dial',
        tags: ['Python', 'Algorithms', 'Advent of Code'],
        markdown: day1Markdown,
        prePostDialogueBoxes: [...adventOfCodeDialogueBoxes],
    },
    {
        id: 'aoc-2025-day-2',
        title: 'Advent of Code 2025 - Day 2',
        date: createLocalDate('2026-01-03'),
        summary: 'Finding optimal substrings to validate ID numbers',
        tags: [
            'Python',
            'Algorithms',
            'Advent of Code',
            'Knuth-Morris-Pratt algorithm',
        ],
        markdown: day2Markdown,
        prePostDialogueBoxes: [...adventOfCodeDialogueBoxes],
    },
    {
        id: 'aoc-2025-day-3',
        title: 'Advent of Code 2025 - Day 3',
        date: createLocalDate('2026-01-03'),
        summary:
            'Building the largest number possible using only a finite string of digits',
        tags: ['Python', 'Algorithms', 'Advent of Code'],
        markdown: day3Markdown,
        prePostDialogueBoxes: [...adventOfCodeDialogueBoxes],
    },
    {
        id: 'aoc-2025-day-4',
        title: 'Advent of Code 2025 - Day 4',
        date: createLocalDate('2026-01-04'),
        summary:
            'Counting how many rolls of paper a forklift can remove from a grid',
        tags: ['Python', 'Algorithms', 'Advent of Code'],
        markdown: day4Markdown,
        prePostDialogueBoxes: [...adventOfCodeDialogueBoxes],
    },
    {
        id: 'aoc-2025-day-5',
        title: 'Advent of Code 2025 - Day 5',
        date: createLocalDate('2026-01-04'),
        summary:
            'Identifying valid IDs by ensuring they fall within overlapping valid ranges',
        tags: ['Python', 'Algorithms', 'Advent of Code'],
        markdown: day5Markdown,
        prePostDialogueBoxes: [...adventOfCodeDialogueBoxes],
    },
    {
        id: 'aoc-2025-day-6',
        title: 'Advent of Code 2025 - Day 6',
        date: createLocalDate('2026-01-04'),
        summary: 'Helping Cephalopods with their math homework',
        tags: ['Python', 'Algorithms', 'Advent of Code', 'numpy'],
        markdown: day6Markdown,
        prePostDialogueBoxes: [...adventOfCodeDialogueBoxes],
    },
    {
        id: 'aoc-2025-day-7',
        title: 'Advent of Code 2025 - Day 7',
        date: createLocalDate('2026-01-05'),
        summary: 'Some common tachyon beam splitting arithmetic',
        tags: ['Python', 'Algorithms', 'Advent of Code', 'Dynamic Programming'],
        markdown: day7Markdown,
        prePostDialogueBoxes: [...adventOfCodeDialogueBoxes],
    },
];

export { AdventOfCode2025Posts };

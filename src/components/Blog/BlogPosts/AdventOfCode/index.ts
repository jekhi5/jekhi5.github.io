import { BlogPost, retractableHeaderType } from 'types';
import { createLocalDate } from 'utils/dateFormatters';
import day1Markdown from './2025/markdown/day1';
import day2Markdown from './2025/markdown/day2';
import day3Markdown from './2025/markdown/day3';
import day4Markdown from './2025/markdown/day4';
import day5Markdown from './2025/markdown/day5';
import day6Markdown from './2025/markdown/day6';
import day7Markdown from './2025/markdown/day7';

export const whatIsAdventOfCodeBox = {
    title: 'What is Advent of Code?',
    type: retractableHeaderType.NORMAL,
    markdown: `
[Advent of Code](https://www.adventofcode.com) is an annual series of very creative and well-designed coding challenges during the month of December. I encourage you to check it out! I enjoy these puzzles as a way to challenge myself and spark fun, nerdy conversations with my friends.
            `.trim(),
    startOpen: false,
};

const AdventOfCode2025Posts: BlogPost[] = [
    {
        id: 'aoc-2025-day-1',
        title: 'Advent of Code 2025 - Day 1',
        date: createLocalDate('2026-01-03'),
        summary: 'Keeping track of numbers on an ever rotating dial',
        tags: ['Python', 'Iteration', 'Modulo'],
        markdown: day1Markdown,
        prePostDialogueBoxes: [whatIsAdventOfCodeBox],
    },
    {
        id: 'aoc-2025-day-2',
        title: 'Advent of Code 2025 - Day 2',
        date: createLocalDate('2026-01-03'),
        summary: 'Finding optimal substrings to validate ID numbers',
        tags: ['Python', 'Knuth-Morris-Pratt algorithm'],
        markdown: day2Markdown,
        prePostDialogueBoxes: [whatIsAdventOfCodeBox],
    },
    {
        id: 'aoc-2025-day-3',
        title: 'Advent of Code 2025 - Day 3',
        date: createLocalDate('2026-01-03'),
        summary:
            'Building the largest number possible using only a finite string of digits',
        tags: ['Python', 'String matching', 'Substring'],
        markdown: day3Markdown,
        prePostDialogueBoxes: [whatIsAdventOfCodeBox],
    },
    {
        id: 'aoc-2025-day-4',
        title: 'Advent of Code 2025 - Day 4',
        date: createLocalDate('2026-01-04'),
        summary:
            'Counting how many rolls of paper a forklift can remove from a grid',
        tags: ['Python', '2D array traversal'],
        markdown: day4Markdown,
        prePostDialogueBoxes: [whatIsAdventOfCodeBox],
    },
    {
        id: 'aoc-2025-day-5',
        title: 'Advent of Code 2025 - Day 5',
        date: createLocalDate('2026-01-04'),
        summary:
            'Identifying valid IDs by ensuring they fall within overlapping valid ranges',
        tags: ['Python', 'Preprocessing', 'Recursion'],
        markdown: day5Markdown,
        prePostDialogueBoxes: [whatIsAdventOfCodeBox],
    },
    {
        id: 'aoc-2025-day-6',
        title: 'Advent of Code 2025 - Day 6',
        date: createLocalDate('2026-01-04'),
        summary: 'Helping Cephalopods with their math homework',
        tags: ['Python', 'NumPy', 'Transpose'],
        markdown: day6Markdown,
        prePostDialogueBoxes: [whatIsAdventOfCodeBox],
    },
    {
        id: 'aoc-2025-day-7',
        title: 'Advent of Code 2025 - Day 7',
        date: createLocalDate('2026-01-05'),
        summary: 'Some common tachyon beam splitting arithmetic',
        tags: ['Python', 'Dynamic Programming', 'Memoization', 'Recursion'],
        markdown: day7Markdown,
        prePostDialogueBoxes: [whatIsAdventOfCodeBox],
    },
];

export { AdventOfCode2025Posts };

import { retractableHeaderType } from 'types';

const whatIsAdventOfCode = {
    title: 'What is Advent of Code?',
    type: retractableHeaderType.NORMAL,
    markdown: `
[Advent of Code](https://www.adventofcode.com) is an annual series of very creative and well-designed coding challenges during the month of December. I encourage you to check it out! I enjoy these puzzles as a way to challenge myself and spark fun, nerdy conversations with my friends.
            `.trim(),
    startOpen: false,
};
const whatIsThisBlog = {
    title: 'What is this blog?',
    type: retractableHeaderType.NORMAL,
    markdown: `
I'm writing these posts explaining my solutions to Advent of Code puzzles to practice articulating myself technically. If you're interested, try solving the puzzle for the corresponding day yourself first, then compare your approach with my solution below to see if we thought about it similarly. You can also find all my solutions for each year I've participated at [this repository](https://www.github.com/jekhi5/advent-of-code).

Also, my solutions are not necessarily optimal. I use these puzzles as a way to stretch my algorithms knowledge and, more importantly, to have fun while coding -- separate from my daily life as a programmer. If you see ways I might improve any of my solutions, please feel free to email me through [the contact form](/#/contact) on this portfolio.

Finally, if you're interested in another perspective, consider checking out my friend [Emery's blog](https://www.jacobowitz.org/blog.html) to explore his solutions and learn about his thought process.
            `.trim(),
    startOpen: false,
};

const adventOfCodeDialogueBoxes = [whatIsAdventOfCode, whatIsThisBlog];
export default adventOfCodeDialogueBoxes;

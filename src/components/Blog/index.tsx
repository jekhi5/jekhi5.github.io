import { posts } from './BlogPosts';
import './index.css';
import { retractableHeaderType } from 'types';
import RetractableText from './RetractableText';
import { whatIsAdventOfCodeBox } from './BlogPosts/AdventOfCode';
import PostCardComponent from './PostCardComponent';

export default function BlogList() {
    const blogExplanation = `
I'm writing these posts explaining my solutions to [Advent of Code](https://www.adventofcode.com) puzzles to practice articulating myself technically. If you're interested, try solving the puzzle for the corresponding day yourself first, then compare your approach with my solution to see if we thought about it similarly. You can also find all my solutions for each year I've participated at [this repository](https://www.github.com/jekhi5/advent-of-code).

Also, my solutions are not necessarily optimal. I use these puzzles as a way to stretch my algorithms knowledge and, more importantly, to have fun while coding -- separate from my daily life as a programmer. If you see ways I might improve any of my solutions, please feel free to email me through [the contact form](/#/contact) on this portfolio.

Finally, if you're interested in another perspective, consider checking out my friend [Emery's blog](https://www.jacobowitz.org/blog.html) to explore his solutions and learn about his thought process.
            `.trim();
    return (
        <div className="blog-list">
            <h2 className="header">Blog</h2>
            <RetractableText
                title={'What is this blog?'}
                type={retractableHeaderType.NORMAL}
                markdown={blogExplanation}
                startOpen={true}
            />

            <RetractableText
                title={whatIsAdventOfCodeBox.title}
                type={whatIsAdventOfCodeBox.type}
                markdown={whatIsAdventOfCodeBox.markdown}
                startOpen={whatIsAdventOfCodeBox.startOpen}
            />

            {posts.map((post) => (
                <PostCardComponent post={post} />
            ))}
        </div>
    );
}

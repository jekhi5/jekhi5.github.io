import { BlogPost } from 'types';
import { AdventOfCode2025Posts } from './AdventOfCode';

const allPosts: BlogPost[] = [...AdventOfCode2025Posts];

// Sort posts by date (newest first)
export const posts = allPosts.sort((a, b) =>
    b.date.getTime() === a.date.getTime()
        ? b.title.localeCompare(a.title)
        : b.date.getTime() - a.date.getTime(),
);

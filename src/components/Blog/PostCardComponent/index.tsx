import { Link } from 'react-router-dom';
import { BlogPost } from 'types';
import { formatBlogDate } from 'utils/dateFormatters';
import './index.css';

export default function PostCardComponent({ post }: { post: BlogPost }) {
    return (
        <Link key={post.id} to={`/blog/${post.id}`} className="post-card">
            <div className="post-card-header">
                <h3>{post.title}</h3>
                <div className="post-card-meta">
                    <time>{formatBlogDate(post.date)}</time>
                </div>
            </div>

            <p className="post-card-summary">{post.summary}</p>

            <div className="post-card-tags">
                {post.tags.sort().map((tag) => (
                    <span key={tag} className="post-card-tag">
                        {tag}
                    </span>
                ))}
            </div>
        </Link>
    );
}

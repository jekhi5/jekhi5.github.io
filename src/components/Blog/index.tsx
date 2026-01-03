import { Link } from 'react-router-dom';
import { posts } from './BlogPosts';
import { formatBlogDate } from 'utils/dateFormatters';
import './index.css';

export default function BlogList() {
    return (
        <div className="blog-list">
            <h2 className="header">Blog</h2>
            <p style={{ marginBottom: '2rem', color: '#6b7280' }}>
                Thoughts on coding, problem-solving, and projects I'm working
                on.
            </p>

            {posts.map((post) => (
                <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="post-card"
                >
                    <div className="post-card-header">
                        <h3>{post.title}</h3>
                        <div className="post-card-meta">
                            <time>{formatBlogDate(post.date)}</time>
                        </div>
                    </div>

                    <p className="post-card-summary">{post.summary}</p>

                    <div className="post-card-tags">
                        {post.tags.map((tag) => (
                            <span key={tag} className="post-card-tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </Link>
            ))}
        </div>
    );
}

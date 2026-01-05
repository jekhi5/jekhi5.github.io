import { useParams, Navigate, Link } from 'react-router-dom';
import { posts } from './index';
import MarkdownBlogPost from '../PostComponent';
import { formatBlogDate } from 'utils/dateFormatters';
import RetractableText from '../RetractableText';
import { BACKWARD_ARROW } from 'utils/unicodeMarks';

export default function BlogPostRouter() {
    const { postId } = useParams<{ postId: string }>();

    const post = posts.find((p) => p.id === postId);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <>
            <div
                style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    padding: '2rem 1rem 0',
                }}
            >
                <Link
                    to="/blog"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: '#3b82f6',
                        textDecoration: 'none',
                        fontWeight: '500',
                        transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.color = '#2563eb')
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.color = '#3b82f6')
                    }
                >
                    {`${BACKWARD_ARROW} Back to Blog`}
                </Link>
            </div>
            {post.prePostDialogueBoxes &&
                post.prePostDialogueBoxes.map((dialogueBox) => (
                    <div
                        style={{
                            maxWidth: '800px',
                            margin: '0 auto',
                            padding: '0 1rem',
                        }}
                    >
                        <RetractableText
                            title={dialogueBox.title ?? ''}
                            type={dialogueBox.type}
                            markdown={dialogueBox.markdown}
                            startOpen={dialogueBox.startOpen ?? true}
                        />
                    </div>
                ))}
            <MarkdownBlogPost
                title={post.title}
                date={formatBlogDate(post.date)}
                tags={post.tags}
                markdown={post.markdown}
            />
        </>
    );
}

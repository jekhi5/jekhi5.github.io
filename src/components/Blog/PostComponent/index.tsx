import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './index.css';

interface BlogPostProps {
    title: string;
    date: string;
    tags: string[];
    markdown: string;
}

export default function BlogPost({
    title,
    date,
    tags,
    markdown,
}: BlogPostProps) {
    return (
        <article className="blog-post">
            <header className="post-header">
                <h1>{title}</h1>
                <div className="post-meta">
                    <time>{date}</time>
                </div>
            </header>

            <section className="post-content">
                <ReactMarkdown
                    components={{
                        code({ className, children, ...props }: any) {
                            const match = /language-(\w+)/.exec(
                                className || '',
                            );
                            const inline = !match;
                            return !inline ? (
                                <SyntaxHighlighter
                                    style={vscDarkPlus as any}
                                    language={match[1]}
                                    PreTag="div"
                                    customStyle={{
                                        borderRadius: '8px',
                                        fontSize: '14px',
                                        padding: '1rem',
                                    }}
                                >
                                    {String(children).replace(/^\n|\n$/g, '')}
                                </SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                >
                    {markdown}
                </ReactMarkdown>
            </section>

            <footer className="post-footer">
                <div className="post-tags">
                    {tags.map((tag) => (
                        <span key={tag} className="tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </footer>
        </article>
    );
}

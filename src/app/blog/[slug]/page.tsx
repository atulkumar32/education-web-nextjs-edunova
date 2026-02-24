'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Container from '@/components/common/Container';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import styles from './page.module.scss';
import blogsData from '@/data/blogs.json';

export default function BlogDetailPage() {
  const params = useParams();
  const blog = blogsData.find((b) => b.slug === params.slug);

  if (!blog) {
    return (
      <Container>
        <div className={styles.notFound}>Blog post not found</div>
      </Container>
    );
  }

  const relatedBlogs = blogsData.filter((b) => b.category === blog.category && b.id !== blog.id).slice(0, 3);

  return (
    <div className={styles.page}>
      <Container>
        <article className={styles.article}>
          <div className={styles.header}>
            <Badge variant="primary">{blog.category}</Badge>
            <h1 className={styles.title}>{blog.title}</h1>
            <div className={styles.meta}>
              <div className={styles.author}>
                <div className={styles.avatar}>👤</div>
                <span>{blog.author.name}</span>
              </div>
              <span>•</span>
              <span>{blog.date}</span>
              <span>•</span>
              <span>{blog.readTime}</span>
            </div>
          </div>

          <div className={styles.image}>📝</div>

          <div className={styles.content}>
            <p>{blog.content}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h2>Key Takeaways</h2>
            <ul>
              <li>Understanding the fundamentals is crucial for success</li>
              <li>Practice consistently to improve your skills</li>
              <li>Stay updated with the latest industry trends</li>
              <li>Join communities to learn from others</li>
            </ul>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </article>

        {relatedBlogs.length > 0 && (
          <section className={styles.related}>
            <h2>Related Posts</h2>
            <div className={styles.relatedGrid}>
              {relatedBlogs.map((relatedBlog) => (
                <Link key={relatedBlog.id} href={`/blog/${relatedBlog.slug}`} className={styles.relatedCard}>
                  <div className={styles.relatedImage}>📝</div>
                  <div className={styles.relatedContent}>
                    <h3>{relatedBlog.title}</h3>
                    <p>{relatedBlog.excerpt}</p>
                    <span className={styles.readMore}>Read more →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className={styles.backButton}>
          <Link href="/blog">
            <Button variant="outline">← Back to Blog</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

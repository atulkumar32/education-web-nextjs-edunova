'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Badge from '@/components/ui/Badge';
import styles from './page.module.scss';
import blogsData from '@/data/blogs.json';

export default function BlogPage() {
  const featuredBlogs = blogsData.filter((blog) => blog.featured);
  const regularBlogs = blogsData.filter((blog) => !blog.featured);

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <ScrollReveal>
            <h1 className={styles.title}>Blog & Resources</h1>
            <p className={styles.subtitle}>
              Insights, tutorials, and tips to accelerate your learning journey
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className={styles.container}>
        {featuredBlogs.length > 0 && (
          <section className={styles.featured}>
            <ScrollReveal>
              <h2>Featured Posts</h2>
            </ScrollReveal>
            <div className={styles.featuredGrid}>
              {featuredBlogs.map((blog, index) => (
                <ScrollReveal key={blog.id} delay={index * 0.1}>
                  <Link href={`/blog/${blog.slug}`} className={styles.featuredCard}>
                    <div className={styles.featuredImage}>📝</div>
                    <div className={styles.featuredContent}>
                      <Badge variant="primary">{blog.category}</Badge>
                      <h3>{blog.title}</h3>
                      <p>{blog.excerpt}</p>
                      <div className={styles.meta}>
                        <div className={styles.author}>
                          <div className={styles.avatar}>👤</div>
                          <span>{blog.author.name}</span>
                        </div>
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

        <section className={styles.allPosts}>
          <ScrollReveal>
            <h2>All Posts</h2>
          </ScrollReveal>
          <div className={styles.grid}>
            {regularBlogs.map((blog, index) => (
              <ScrollReveal key={blog.id} delay={index * 0.05}>
                <Link href={`/blog/${blog.slug}`} className={styles.card}>
                  <div className={styles.image}>📝</div>
                  <div className={styles.content}>
                    <Badge variant="primary" size="sm">
                      {blog.category}
                    </Badge>
                    <h3>{blog.title}</h3>
                    <p>{blog.excerpt}</p>
                    <div className={styles.meta}>
                      <span>{blog.author.name}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

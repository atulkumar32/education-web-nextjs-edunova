'use client';

import React, { useState } from 'react';
import Container from '@/components/common/Container';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import styles from './page.module.scss';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <Container>
          <ScrollReveal>
            <h1 className={styles.title}>Get in Touch</h1>
            <p className={styles.subtitle}>We'd love to hear from you. Send us a message!</p>
          </ScrollReveal>
        </Container>
      </div>

      <Container>
        <div className={styles.content}>
          <div className={styles.formSection}>
            <ScrollReveal>
              {isSubmitted ? (
                <div className={styles.success}>
                  <div className={styles.successIcon}>✓</div>
                  <h2>Message Sent!</h2>
                  <p>Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <Input
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                  <Input
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                  <div className={styles.textareaWrapper}>
                    <label>Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                    />
                  </div>
                  <Button type="submit" size="lg" fullWidth>
                    Send Message
                  </Button>
                </form>
              )}
            </ScrollReveal>
          </div>

          <div className={styles.infoSection}>
            <ScrollReveal delay={0.2}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📧</div>
                <h3>Email</h3>
                <p>support@edunova.com</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📞</div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📍</div>
                <h3>Address</h3>
                <p>123 Learning Street, Education City, EC 12345</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className={styles.developerCard}>
                <h3>Developer Info</h3>
                <p>Built with ❤️ by EduNova Team</p>
                <p className={styles.tech}>Next.js • TypeScript • SCSS • Framer Motion</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </div>
  );
}

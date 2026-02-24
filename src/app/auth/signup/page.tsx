'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Container from '@/components/common/Container';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useAppDispatch } from '@/store/hooks';
import { login } from '@/store/authSlice';
import styles from '../login/page.module.scss';

export default function SignupPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      login({
        id: 1,
        name: name,
        email: email,
      })
    );
    router.push('/');
  };

  return (
    <div className={styles.page}>
      <Container>
        <div className={styles.card}>
          <div className={styles.header}>
            <h1>Create Account</h1>
            <p>Start your learning journey today</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <Input
              label="Full Name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
            />

            <Input
              label="Email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
            />

            <Input
              label="Password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
            />

            <Button type="submit" fullWidth size="lg">
              Sign Up
            </Button>
          </form>

          <div className={styles.footer}>
            Already have an account? <Link href="/auth/login">Login</Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

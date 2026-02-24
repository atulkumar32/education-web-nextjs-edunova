'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Container from '@/components/common/Container';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useAppDispatch } from '@/store/hooks';
import { login } from '@/store/authSlice';
import styles from './page.module.scss';

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      login({
        id: 1,
        name: 'John Doe',
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
            <h1>Welcome Back</h1>
            <p>Login to continue your learning journey</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
            />

            <div className={styles.forgot}>
              <Link href="#">Forgot password?</Link>
            </div>

            <Button type="submit" fullWidth size="lg">
              Login
            </Button>
          </form>

          <div className={styles.footer}>
            Don't have an account? <Link href="/auth/signup">Sign up</Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

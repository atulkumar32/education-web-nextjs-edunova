'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './FloatingBlob.module.scss';

interface FloatingBlobProps {
  color: string;
  size?: number;
  top?: string;
  left?: string;
  delay?: number;
}

const FloatingBlob: React.FC<FloatingBlobProps> = ({
  color,
  size = 300,
  top = '10%',
  left = '10%',
  delay = 0,
}) => {
  return (
    <motion.div
      className={styles.blob}
      style={{
        background: color,
        width: size,
        height: size,
        top,
        left,
      }}
      animate={{
        x: [0, 30, 0, -30, 0],
        y: [0, -30, 0, 30, 0],
        scale: [1, 1.1, 1, 0.9, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  );
};

export default FloatingBlob;

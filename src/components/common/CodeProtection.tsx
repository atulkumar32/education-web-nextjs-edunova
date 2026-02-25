'use client';

import React, { useEffect, useState } from 'react';
import Modal from '@/components/ui/Modal';
import Button from '@/components/ui/Button';
import styles from './CodeProtection.module.scss';

const CodeProtection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setShowModal(true);
      return false;
    };

    // Disable keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable F12
      if (e.key === 'F12') {
        e.preventDefault();
        setShowModal(true);
        return false;
      }

      // Disable Ctrl+Shift+I (DevTools)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        setShowModal(true);
        return false;
      }

      // Disable Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        setShowModal(true);
        return false;
      }

      // Disable Ctrl+Shift+C (Inspect Element)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        setShowModal(true);
        return false;
      }

      // Disable Ctrl+U (View Source)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        setShowModal(true);
        return false;
      }

      // Disable Ctrl+S (Save Page)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        setShowModal(true);
        return false;
      }

      // Disable Ctrl+P (Print)
      if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        setShowModal(true);
        return false;
      }
    };

    // Detect DevTools opening
    const detectDevTools = () => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      
      if (widthThreshold || heightThreshold) {
        setShowModal(true);
      }
    };

    // Disable text selection
    const disableSelection = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Disable drag
    const disableDrag = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('selectstart', disableSelection);
    document.addEventListener('dragstart', disableDrag);
    
    // Check for DevTools periodically
    const devToolsInterval = setInterval(detectDevTools, 1000);

    // Disable copy
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      setShowModal(true);
      return false;
    };
    document.addEventListener('copy', handleCopy);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', disableSelection);
      document.removeEventListener('dragstart', disableDrag);
      document.removeEventListener('copy', handleCopy);
      clearInterval(devToolsInterval);
    };
  }, []);

  const handleContactOwner = () => {
    window.open('https://www.linkedin.com/in/pradipmourya-61a387218/', '_blank');
    setShowModal(false);
  };

  const handleViewPortfolio = () => {
    window.open('https://pradip-mourya-portfolio.netlify.app/', '_blank');
    setShowModal(false);
  };

  return (
    <>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className={styles.modalContent}>
          <div className={styles.icon}>🔒</div>
          <h2 className={styles.title}>Code Protection Active</h2>
          <p className={styles.message}>
            This website's code is protected. If you're interested in the source code or have any
            questions, please contact the owner.
          </p>
          <div className={styles.actions}>
            <Button onClick={handleContactOwner} size="lg">
              Contact on LinkedIn
            </Button>
            <Button onClick={handleViewPortfolio} variant="outline" size="lg">
              View Portfolio
            </Button>
          </div>
          <button onClick={() => setShowModal(false)} className={styles.closeButton}>
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default CodeProtection;

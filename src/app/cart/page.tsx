'use client';

import React from 'react';
import Link from 'next/link';
import Container from '@/components/common/Container';
import Button from '@/components/ui/Button';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { removeFromCart, updateQuantity } from '@/store/cartSlice';
import styles from './page.module.scss';

export default function CartPage() {
  const dispatch = useAppDispatch();
  const { items, total } = useAppSelector((state) => state.cart);

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  if (items.length === 0) {
    return (
      <Container>
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>🛒</div>
          <h2>Your cart is empty</h2>
          <p>Start learning today by adding courses to your cart</p>
          <Link href="/courses">
            <Button size="lg">Browse Courses</Button>
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <div className={styles.page}>
      <Container>
        <h1 className={styles.title}>Shopping Cart</h1>

        <div className={styles.content}>
          <div className={styles.items}>
            {items.map((item) => (
              <div key={item.id} className={styles.item}>
                <div className={styles.itemImage}>📚</div>
                <div className={styles.itemInfo}>
                  <h3>{item.title}</h3>
                  <div className={styles.itemPrice}>${item.price}</div>
                </div>
                <div className={styles.itemActions}>
                  <div className={styles.quantity}>
                    <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>
                      +
                    </button>
                  </div>
                  <button className={styles.remove} onClick={() => handleRemove(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.summary}>
            <h2>Order Summary</h2>
            <div className={styles.summaryRow}>
              <span>Subtotal:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Tax:</span>
              <span>${(total * 0.1).toFixed(2)}</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.total}`}>
              <span>Total:</span>
              <span>${(total * 1.1).toFixed(2)}</span>
            </div>
            <Link href="/checkout">
              <Button fullWidth size="lg">
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Container from '@/components/common/Container';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { clearCart } from '@/store/cartSlice';
import styles from './page.module.scss';

export default function CheckoutPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { items, total } = useAppSelector((state) => state.cart);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(clearCart());
    router.push('/checkout/success');
  };

  if (items.length === 0) {
    router.push('/cart');
    return null;
  }

  return (
    <div className={styles.page}>
      <Container>
        <h1 className={styles.title}>Checkout</h1>

        <div className={styles.content}>
          <div className={styles.formSection}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <section className={styles.section}>
                <h2>Billing Information</h2>
                <div className={styles.formGrid}>
                  <Input
                    label="Full Name"
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
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                  <Input
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                  <Input
                    label="ZIP Code"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                </div>
              </section>

              <section className={styles.section}>
                <h2>Payment Information</h2>
                <div className={styles.formGrid}>
                  <Input
                    label="Card Number"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                  <Input
                    label="Expiry Date"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                  <Input
                    label="CVV"
                    name="cvv"
                    placeholder="123"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                </div>
              </section>

              <Button type="submit" size="lg" fullWidth>
                Complete Purchase
              </Button>
            </form>
          </div>

          <div className={styles.summary}>
            <h2>Order Summary</h2>
            <div className={styles.items}>
              {items.map((item) => (
                <div key={item.id} className={styles.item}>
                  <span>{item.title}</span>
                  <span>${item.price}</span>
                </div>
              ))}
            </div>
            <div className={styles.summaryRow}>
              <span>Subtotal:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Tax (10%):</span>
              <span>${(total * 0.1).toFixed(2)}</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.total}`}>
              <span>Total:</span>
              <span>${(total * 1.1).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

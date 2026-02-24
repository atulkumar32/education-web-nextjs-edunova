# EduNova - Quick Reference Guide

## 📁 Folder Structure at a Glance

```
src/
├── app/          → Routes only (Next.js App Router)
├── features/     → Page-specific components
├── components/   → Reusable components
├── hooks/        → Custom React hooks
├── utils/        → Utility functions
├── constants/    → Application constants
├── types/        → TypeScript types
├── store/        → Redux state
├── data/         → JSON data
└── styles/       → Global styles
```

## 🎯 Quick Import Guide

### Components
```typescript
// Feature components (page-specific)
import { Hero, FeaturedCourses } from '@/features/home';

// UI components
import { Button, Input, Modal } from '@/components/ui';

// Layout components
import { Header, Footer } from '@/components/layout';

// Common components
import { Container, Section } from '@/components/common';

// Animation components
import { ScrollReveal, Counter, FloatingBlob } from '@/components/animations';
```

### Hooks
```typescript
import { 
  useIsMobile, 
  useIsDesktop, 
  useScrollPast, 
  useLocalStorage, 
  useToggle, 
  useDebounce 
} from '@/hooks';
```

### Utils
```typescript
import { 
  formatCurrency, 
  formatDate, 
  isValidEmail, 
  generateSlug 
} from '@/utils';
```

### Constants
```typescript
import { 
  SITE_CONFIG, 
  NAV_LINKS, 
  BREAKPOINTS, 
  ANIMATION_VARIANTS 
} from '@/constants';
```

### Types
```typescript
import type { 
  Course, 
  Blog, 
  User, 
  ButtonProps 
} from '@/types';
```

### Store
```typescript
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addToCart, removeFromCart } from '@/store/cartSlice';
```

## 🔧 Common Tasks

### Creating a New Page

1. **Create route in `/src/app`**
```typescript
// src/app/my-page/page.tsx
import { MyPageContent } from '@/features/my-page';

export default function MyPage() {
  return <MyPageContent />;
}
```

2. **Create feature components in `/src/features`**
```typescript
// src/features/my-page/MyPageContent.tsx
export default function MyPageContent() {
  return <div>My Page</div>;
}

// src/features/my-page/index.ts
export { default as MyPageContent } from './MyPageContent';
```

### Creating a Reusable Component

```typescript
// src/components/ui/MyComponent.tsx
import styles from './MyComponent.module.scss';

interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

export default function MyComponent({ title, onClick }: MyComponentProps) {
  return (
    <div className={styles.component} onClick={onClick}>
      {title}
    </div>
  );
}
```

### Creating a Custom Hook

```typescript
// src/hooks/useMyHook.ts
import { useState, useEffect } from 'react';

export function useMyHook(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  
  useEffect(() => {
    // Your logic here
  }, [value]);
  
  return [value, setValue] as const;
}

// Don't forget to export from index.ts
// src/hooks/index.ts
export { useMyHook } from './useMyHook';
```

### Adding a Utility Function

```typescript
// src/utils/helpers.ts
export function myUtilFunction(input: string): string {
  return input.toUpperCase();
}

// Already exported from src/utils/index.ts
```

### Adding a Constant

```typescript
// src/constants/index.ts
export const MY_CONSTANT = {
  value1: 'something',
  value2: 'something else',
} as const;
```

### Adding a Type

```typescript
// src/types/index.ts
export interface MyType {
  id: number;
  name: string;
  description: string;
}
```

## 🎨 Styling Patterns

### Component Styles
```scss
// MyComponent.module.scss
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.component {
  @include flex-center;
  padding: $spacing-lg;
  background: $primary;
  
  @include tablet {
    padding: $spacing-xl;
  }
}
```

### Using Mixins
```scss
.myClass {
  @include flex-center;        // Flexbox center
  @include flex-between;        // Flexbox space-between
  @include glass;               // Glassmorphism effect
  @include hover-lift;          // Hover lift animation
  @include container;           // Container with max-width
  @include gradient-text;       // Gradient text effect
  @include custom-scrollbar;    // Custom scrollbar
}
```

### Responsive Design
```scss
.myClass {
  // Mobile first (default)
  font-size: $font-size-base;
  
  @include tablet {
    font-size: $font-size-lg;
  }
  
  @include desktop {
    font-size: $font-size-xl;
  }
  
  @include wide {
    font-size: $font-size-2xl;
  }
}
```

## 🎭 Animation Patterns

### Using Animation Variants
```typescript
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS, TRANSITIONS } from '@/constants';

<motion.div
  initial="hidden"
  animate="visible"
  variants={ANIMATION_VARIANTS.slideUp}
  transition={TRANSITIONS.base}
>
  Content
</motion.div>
```

### Using ScrollReveal
```typescript
import { ScrollReveal } from '@/components/animations';

<ScrollReveal>
  <div>This will animate on scroll</div>
</ScrollReveal>
```

### Using Counter
```typescript
import { Counter } from '@/components/animations';

<Counter end={1000} duration={2} suffix="+" />
```

## 🔄 State Management

### Using Redux
```typescript
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addToCart, removeFromCart } from '@/store/cartSlice';

function MyComponent() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  
  const handleAddToCart = () => {
    dispatch(addToCart({
      courseId: 1,
      title: 'Course Title',
      price: 99.99,
      image: '/course.jpg',
      instructor: 'John Doe',
      quantity: 1,
    }));
  };
  
  return <button onClick={handleAddToCart}>Add to Cart</button>;
}
```

## 📱 Responsive Hooks

```typescript
import { useIsMobile, useIsTablet, useIsDesktop } from '@/hooks';

function MyComponent() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();
  
  return (
    <div>
      {isMobile && <MobileView />}
      {isTablet && <TabletView />}
      {isDesktop && <DesktopView />}
    </div>
  );
}
```

## 🎯 Form Validation

```typescript
import { isValidEmail, isValidPassword } from '@/utils';
import { VALIDATION_MESSAGES } from '@/constants';

function validateForm(email: string, password: string) {
  const errors: string[] = [];
  
  if (!isValidEmail(email)) {
    errors.push(VALIDATION_MESSAGES.email);
  }
  
  if (!isValidPassword(password)) {
    errors.push(VALIDATION_MESSAGES.password);
  }
  
  return errors;
}
```

## 🎨 Using Constants

```typescript
import { 
  SITE_CONFIG, 
  NAV_LINKS, 
  BREAKPOINTS, 
  SUCCESS_MESSAGES 
} from '@/constants';

// Site config
console.log(SITE_CONFIG.name); // "EduNova"

// Navigation
NAV_LINKS.map(link => (
  <a href={link.href}>{link.label}</a>
));

// Breakpoints
const isMobile = window.innerWidth < BREAKPOINTS.tablet;

// Messages
toast.success(SUCCESS_MESSAGES.addedToCart);
```

## 🔍 Type Safety

```typescript
import type { Course, User, ButtonProps } from '@/types';

// Using interfaces
const course: Course = {
  id: 1,
  slug: 'web-development',
  title: 'Web Development',
  // ... other required fields
};

// Component props
const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick 
}) => {
  return (
    <button className={`btn-${variant} btn-${size}`} onClick={onClick}>
      {children}
    </button>
  );
};
```

## 📦 Data Access

```typescript
// Import JSON data
import coursesData from '@/data/courses.json';
import blogsData from '@/data/blogs.json';
import categoriesData from '@/data/categories.json';
import testimonialsData from '@/data/testimonials.json';

// Use with type safety
import type { Course } from '@/types';

const courses: Course[] = coursesData;
const featuredCourses = courses.filter(c => c.featured);
```

## 🚀 Performance Tips

### Lazy Loading
```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});
```

### Memoization
```typescript
import { useMemo, useCallback } from 'react';

const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);

const handleClick = useCallback(() => {
  doSomething();
}, []);
```

## 🎯 Common Patterns

### Modal Pattern
```typescript
import { Modal } from '@/components/ui';
import { useToggle } from '@/hooks';

function MyComponent() {
  const [isOpen, toggle] = useToggle();
  
  return (
    <>
      <button onClick={toggle}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={toggle} title="My Modal">
        <p>Modal content</p>
      </Modal>
    </>
  );
}
```

### Search with Debounce
```typescript
import { useState } from 'react';
import { useDebounce } from '@/hooks';

function SearchComponent() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  
  // Use debouncedSearch for API calls
  useEffect(() => {
    if (debouncedSearch) {
      searchAPI(debouncedSearch);
    }
  }, [debouncedSearch]);
  
  return <input value={search} onChange={(e) => setSearch(e.target.value)} />;
}
```

### LocalStorage Pattern
```typescript
import { useLocalStorage } from '@/hooks';
import { STORAGE_KEYS } from '@/constants';

function MyComponent() {
  const [theme, setTheme] = useLocalStorage(STORAGE_KEYS.theme, 'light');
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </button>
  );
}
```

## 📝 Naming Conventions

- **Components:** PascalCase (`Button.tsx`, `CourseCard.tsx`)
- **Hooks:** camelCase with 'use' prefix (`useMediaQuery.ts`)
- **Utils:** camelCase (`formatCurrency`, `isValidEmail`)
- **Constants:** UPPER_SNAKE_CASE (`SITE_CONFIG`, `NAV_LINKS`)
- **Types:** PascalCase (`Course`, `User`, `ButtonProps`)
- **Files:** Match component/function name
- **Folders:** lowercase or camelCase

## 🎨 Color Variables

```scss
// Primary colors
$primary
$primary-dark
$primary-light
$secondary
$accent

// Status colors
$success
$warning
$error
$info

// Neutral colors
$white
$black
$gray-50 to $gray-900

// Dark mode
$dark-bg
$dark-surface
$dark-border
$dark-text
```

## 📏 Spacing Scale

```scss
$spacing-xs   // 0.25rem (4px)
$spacing-sm   // 0.5rem (8px)
$spacing-md   // 1rem (16px)
$spacing-lg   // 1.5rem (24px)
$spacing-xl   // 2rem (32px)
$spacing-2xl  // 3rem (48px)
$spacing-3xl  // 4rem (64px)
```

## 🔤 Typography Scale

```scss
$font-size-xs    // clamp(0.75rem, ...)
$font-size-sm    // clamp(0.875rem, ...)
$font-size-base  // clamp(1rem, ...)
$font-size-lg    // clamp(1.125rem, ...)
$font-size-xl    // clamp(1.25rem, ...)
$font-size-2xl   // clamp(1.5rem, ...)
$font-size-3xl   // clamp(1.875rem, ...)
$font-size-4xl   // clamp(2.25rem, ...)
$font-size-5xl   // clamp(3rem, ...)
```

---

**Keep this guide handy for quick reference while developing!** 📚

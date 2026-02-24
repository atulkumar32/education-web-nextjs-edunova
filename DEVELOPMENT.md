# Development Guide

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn
- Git
- Code editor (VS Code recommended)

### Initial Setup

1. **Clone and Install**
```bash
git clone <repository-url>
cd edunova
npm install
```

2. **Start Development Server**
```bash
npm run dev
```

3. **Open Browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
edunova/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (pages)/           # Route groups
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── animations/        # Animation components
│   │   ├── common/            # Shared components
│   │   ├── courses/           # Course components
│   │   ├── home/              # Home sections
│   │   ├── layout/            # Header/Footer
│   │   ├── providers/         # Context providers
│   │   └── ui/                # UI components
│   ├── data/                  # JSON data
│   ├── store/                 # Redux store
│   └── styles/                # Global styles
├── public/                    # Static assets
└── package.json
```

## Coding Standards

### TypeScript
- Use TypeScript for all new files
- Define interfaces for props
- Avoid `any` type
- Use type inference when possible

```typescript
// Good
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

// Bad
interface ButtonProps {
  variant?: any;
  size?: any;
  children: any;
}
```

### React Components
- Use functional components
- Use hooks for state management
- Keep components small and focused
- Extract reusable logic into custom hooks

```typescript
// Good
const MyComponent: React.FC<Props> = ({ title }) => {
  const [count, setCount] = useState(0);
  
  return <div>{title}: {count}</div>;
};

// Bad
class MyComponent extends React.Component {
  // Avoid class components
}
```

### SCSS Modules
- One SCSS file per component
- Use variables from `variables.scss`
- Use mixins for common patterns
- Follow BEM naming convention

```scss
// Good
.card {
  padding: $spacing-lg;
  border-radius: $radius-md;
  
  &__title {
    font-size: $font-size-xl;
  }
  
  &--featured {
    background: $gradient-primary;
  }
}

// Bad
.card {
  padding: 20px; // Use variables
}
```

### File Naming
- Components: PascalCase (e.g., `Button.tsx`)
- Styles: Match component name (e.g., `Button.module.scss`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_URL`)

## Component Development

### Creating a New Component

1. **Create Component File**
```typescript
// src/components/ui/NewComponent.tsx
'use client';

import React from 'react';
import styles from './NewComponent.module.scss';

interface NewComponentProps {
  title: string;
  description?: string;
}

const NewComponent: React.FC<NewComponentProps> = ({ 
  title, 
  description 
}) => {
  return (
    <div className={styles.component}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};

export default NewComponent;
```

2. **Create Styles File**
```scss
// src/components/ui/NewComponent.module.scss
@import '@/styles/variables';
@import '@/styles/mixins';

.component {
  padding: $spacing-lg;
  border-radius: $radius-md;
  background: $white;
  
  h2 {
    font-size: $font-size-xl;
    margin-bottom: $spacing-md;
  }
  
  p {
    color: $gray-600;
  }
}
```

3. **Export from Index** (if creating a component library)
```typescript
// src/components/ui/index.ts
export { default as Button } from './Button';
export { default as Input } from './Input';
export { default as NewComponent } from './NewComponent';
```

## State Management

### Redux Slices

1. **Create Slice**
```typescript
// src/store/featureSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FeatureState {
  items: Item[];
  loading: boolean;
}

const initialState: FeatureState = {
  items: [],
  loading: false,
};

const featureSlice = createSlice({
  name: 'feature',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { addItem, setLoading } = featureSlice.actions;
export default featureSlice.reducer;
```

2. **Add to Store**
```typescript
// src/store/store.ts
import featureReducer from './featureSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    feature: featureReducer, // Add new reducer
  },
});
```

3. **Use in Component**
```typescript
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addItem } from '@/store/featureSlice';

const MyComponent = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.feature.items);
  
  const handleAdd = () => {
    dispatch(addItem({ id: 1, name: 'Item' }));
  };
  
  return <button onClick={handleAdd}>Add Item</button>;
};
```

## Styling Guidelines

### Using Variables
```scss
// Always use variables
.component {
  color: $primary;           // ✓ Good
  color: #6366f1;           // ✗ Bad
  
  padding: $spacing-lg;      // ✓ Good
  padding: 24px;            // ✗ Bad
  
  border-radius: $radius-md; // ✓ Good
  border-radius: 8px;       // ✗ Bad
}
```

### Using Mixins
```scss
.component {
  @include flex-center;      // Flexbox centering
  @include container;        // Container width
  @include glass;           // Glassmorphism effect
  @include hover-lift;      // Hover animation
  
  @include tablet {         // Responsive breakpoint
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### Responsive Design
```scss
.component {
  // Mobile first
  padding: $spacing-md;
  
  @include tablet {
    padding: $spacing-lg;
  }
  
  @include desktop {
    padding: $spacing-xl;
  }
}
```

## Animation Guidelines

### Scroll Reveal
```typescript
import ScrollReveal from '@/components/animations/ScrollReveal';

<ScrollReveal delay={0.2} direction="up">
  <div>Content to animate</div>
</ScrollReveal>
```

### Framer Motion
```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Counter Animation
```typescript
import Counter from '@/components/animations/Counter';

<Counter end={1000} suffix="+" duration={2} />
```

## Data Management

### Adding New Data

1. **Create/Update JSON File**
```json
// src/data/newData.json
[
  {
    "id": 1,
    "title": "Item 1",
    "description": "Description"
  }
]
```

2. **Import and Use**
```typescript
import data from '@/data/newData.json';

const MyComponent = () => {
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};
```

## Testing

### Component Testing (Future)
```typescript
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

## Performance Optimization

### Image Optimization
```typescript
import Image from 'next/image';

// Use Next.js Image component
<Image
  src="/course.jpg"
  alt="Course"
  width={400}
  height={300}
  priority // For above-the-fold images
/>
```

### Code Splitting
```typescript
import dynamic from 'next/dynamic';

// Lazy load heavy components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <LoadingSpinner />,
});
```

### Memoization
```typescript
import { useMemo, useCallback } from 'react';

const MyComponent = ({ items }) => {
  // Memoize expensive calculations
  const sortedItems = useMemo(() => {
    return items.sort((a, b) => a.price - b.price);
  }, [items]);
  
  // Memoize callbacks
  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []);
  
  return <div>{/* ... */}</div>;
};
```

## Git Workflow

### Branch Naming
- Feature: `feature/add-user-dashboard`
- Bug fix: `fix/cart-calculation-error`
- Hotfix: `hotfix/critical-security-patch`

### Commit Messages
```
feat: add user dashboard page
fix: resolve cart calculation bug
docs: update README with deployment info
style: format code with prettier
refactor: simplify authentication logic
test: add unit tests for Button component
```

### Pull Request Process
1. Create feature branch
2. Make changes
3. Write tests
4. Update documentation
5. Create PR with description
6. Request review
7. Address feedback
8. Merge when approved

## Debugging

### React DevTools
- Install React DevTools extension
- Inspect component props and state
- Profile component renders

### Redux DevTools
- Install Redux DevTools extension
- Monitor state changes
- Time-travel debugging

### Console Logging
```typescript
// Development only
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', data);
}
```

## Common Issues

### Issue: Styles not applying
**Solution:** Check import path and module naming
```typescript
// Correct
import styles from './Component.module.scss';

// Incorrect
import styles from './Component.scss';
```

### Issue: Hydration errors
**Solution:** Ensure server and client render the same
```typescript
// Use useEffect for client-only code
useEffect(() => {
  // Client-only code here
}, []);
```

### Issue: Redux state not persisting
**Solution:** Check localStorage implementation
```typescript
// Ensure localStorage is only accessed in browser
if (typeof window !== 'undefined') {
  localStorage.setItem('key', value);
}
```

## Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion)
- [Redux Toolkit Docs](https://redux-toolkit.js.org)

### Tools
- [VS Code](https://code.visualstudio.com)
- [React DevTools](https://react.dev/learn/react-developer-tools)
- [Redux DevTools](https://github.com/reduxjs/redux-devtools)

### VS Code Extensions
- ESLint
- Prettier
- SCSS IntelliSense
- TypeScript Hero
- Auto Rename Tag
- Path Intellisense

## Support

For questions or issues:
1. Check existing documentation
2. Search GitHub issues
3. Ask in team chat
4. Create new issue with details

---

Happy coding! 🚀

# EduNova - Project Structure

## 📁 New Organized Architecture

The project has been restructured following enterprise-level best practices with clear separation of concerns.

```
edunova/
├── src/
│   ├── app/                          # Next.js App Router (Routes only)
│   │   ├── about/
│   │   │   ├── page.tsx
│   │   │   └── page.module.scss
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   └── signup/
│   │   ├── blog/
│   │   │   ├── [slug]/
│   │   │   ├── page.tsx
│   │   │   └── page.module.scss
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── contact/
│   │   ├── courses/
│   │   │   └── [slug]/
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Home page
│   │   └── globals.css
│   │
│   ├── pages/                        # Page-specific components
│   │   ├── home/                     # Home page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Hero.module.scss
│   │   │   ├── FeaturedCourses.tsx
│   │   │   ├── FeaturedCourses.module.scss
│   │   │   ├── Categories.tsx
│   │   │   ├── Categories.module.scss
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Testimonials.module.scss
│   │   │   ├── Newsletter.tsx
│   │   │   ├── Newsletter.module.scss
│   │   │   └── index.ts            # Barrel export
│   │   ├── about/                    # About page sections (future)
│   │   ├── courses/                  # Courses page sections (future)
│   │   └── blog/                     # Blog page sections (future)
│   │
│   ├── components/                   # Reusable components
│   │   ├── ui/                       # UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.scss
│   │   │   ├── Input.tsx
│   │   │   ├── Input.module.scss
│   │   │   ├── Modal.tsx
│   │   │   ├── Modal.module.scss
│   │   │   ├── Badge.tsx
│   │   │   ├── Badge.module.scss
│   │   │   ├── Accordion.tsx
│   │   │   ├── Accordion.module.scss
│   │   │   ├── LoadingSpinner.tsx
│   │   │   └── LoadingSpinner.module.scss
│   │   ├── layout/                   # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Header.module.scss
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.module.scss
│   │   ├── common/                   # Common components
│   │   │   ├── Container.tsx
│   │   │   ├── Container.module.scss
│   │   │   ├── Section.tsx
│   │   │   └── Section.module.scss
│   │   ├── animations/               # Animation components
│   │   │   ├── ScrollReveal.tsx
│   │   │   ├── Counter.tsx
│   │   │   ├── FloatingBlob.tsx
│   │   │   └── FloatingBlob.module.scss
│   │   ├── courses/                  # Course-specific components
│   │   │   ├── CourseCard.tsx
│   │   │   ├── CourseCard.module.scss
│   │   │   ├── FilterSidebar.tsx
│   │   │   ├── FilterSidebar.module.scss
│   │   │   ├── SearchBar.tsx
│   │   │   └── SearchBar.module.scss
│   │   └── providers/                # Context providers
│   │       └── StoreProvider.tsx
│   │
│   ├── hooks/                        # Custom React hooks
│   │   ├── useMediaQuery.ts          # Responsive breakpoint detection
│   │   ├── useScrollPosition.ts      # Scroll position tracking
│   │   ├── useLocalStorage.ts        # localStorage with SSR support
│   │   ├── useToggle.ts              # Boolean state toggle
│   │   ├── useDebounce.ts            # Value debouncing
│   │   └── index.ts                  # Barrel export
│   │
│   ├── utils/                        # Utility functions
│   │   ├── format.ts                 # Formatting utilities
│   │   │   ├── formatCurrency()
│   │   │   ├── formatNumber()
│   │   │   ├── formatDate()
│   │   │   ├── formatDuration()
│   │   │   ├── truncateText()
│   │   │   ├── calculateDiscount()
│   │   │   └── formatRating()
│   │   ├── validation.ts             # Validation utilities
│   │   │   ├── isValidEmail()
│   │   │   ├── isValidPassword()
│   │   │   ├── isValidPhone()
│   │   │   ├── isValidUrl()
│   │   │   ├── sanitizeString()
│   │   │   ├── isRequired()
│   │   │   ├── hasMinLength()
│   │   │   └── hasMaxLength()
│   │   ├── helpers.ts                # Helper utilities
│   │   │   ├── generateSlug()
│   │   │   ├── capitalizeWords()
│   │   │   ├── getInitials()
│   │   │   ├── shuffleArray()
│   │   │   ├── getRandomItems()
│   │   │   ├── groupBy()
│   │   │   ├── debounce()
│   │   │   ├── throttle()
│   │   │   ├── deepClone()
│   │   │   ├── isEmpty()
│   │   │   ├── sleep()
│   │   │   ├── generateId()
│   │   │   └── clamp()
│   │   └── index.ts                  # Barrel export
│   │
│   ├── constants/                    # Application constants
│   │   └── index.ts
│   │       ├── SITE_CONFIG           # Site configuration
│   │       ├── NAV_LINKS             # Navigation links
│   │       ├── BREAKPOINTS           # Responsive breakpoints
│   │       ├── ANIMATION_VARIANTS    # Framer Motion variants
│   │       ├── TRANSITIONS           # Animation transitions
│   │       ├── COURSE_LEVELS         # Course level options
│   │       ├── COURSE_CATEGORIES     # Course categories
│   │       ├── SORT_OPTIONS          # Sort options
│   │       ├── SOCIAL_LINKS          # Social media links
│   │       ├── FOOTER_LINKS          # Footer navigation
│   │       ├── CONTACT_INFO          # Contact information
│   │       ├── STATS                 # Statistics data
│   │       ├── VALIDATION_MESSAGES   # Form validation messages
│   │       ├── API_ENDPOINTS         # API endpoint URLs
│   │       ├── STORAGE_KEYS          # localStorage keys
│   │       ├── ERROR_MESSAGES        # Error messages
│   │       └── SUCCESS_MESSAGES      # Success messages
│   │
│   ├── types/                        # TypeScript type definitions
│   │   └── index.ts
│   │       ├── Course                # Course interface
│   │       ├── Instructor            # Instructor interface
│   │       ├── Blog                  # Blog interface
│   │       ├── Category              # Category interface
│   │       ├── Testimonial           # Testimonial interface
│   │       ├── CartItem              # Cart item interface
│   │       ├── User                  # User interface
│   │       ├── Form Data Types       # Form interfaces
│   │       ├── Component Props       # Component prop types
│   │       └── API Response Types    # API response types
│   │
│   ├── store/                        # Redux state management
│   │   ├── store.ts                  # Redux store configuration
│   │   ├── cartSlice.ts              # Cart state slice
│   │   ├── authSlice.ts              # Auth state slice
│   │   └── hooks.ts                  # Typed Redux hooks
│   │
│   ├── data/                         # Static data (JSON)
│   │   ├── courses.json              # Course data
│   │   ├── blogs.json                # Blog data
│   │   ├── categories.json           # Category data
│   │   └── testimonials.json         # Testimonial data
│   │
│   └── styles/                       # Global styles
│       ├── globals.scss              # Global styles
│       ├── variables.scss            # SCSS variables
│       └── mixins.scss               # SCSS mixins
│
├── public/                           # Static assets
│   ├── courses/                      # Course images
│   ├── instructors/                  # Instructor avatars
│   ├── blog/                         # Blog images
│   └── *.svg                         # SVG icons
│
├── .next/                            # Next.js build output
├── node_modules/                     # Dependencies
│
├── package.json                      # Dependencies & scripts
├── tsconfig.json                     # TypeScript config
├── next.config.ts                    # Next.js config
├── eslint.config.mjs                 # ESLint config
├── postcss.config.mjs                # PostCSS config
├── .gitignore                        # Git ignore rules
│
└── Documentation/
    ├── README.md                     # Main documentation
    ├── FEATURES.md                   # Feature list
    ├── DEVELOPMENT.md                # Development guide
    ├── DEPLOYMENT.md                 # Deployment guide
    ├── PROJECT_SUMMARY.md            # Project summary
    ├── PROJECT_STRUCTURE.md          # This file
    ├── QUICK_START.md                # Quick start guide
    └── REQUIREMENTS_CHECKLIST.md     # Requirements checklist
```

## 📂 Folder Descriptions

### `/src/app` - Next.js App Router
- Contains only route definitions and page components
- Each route has its own folder with `page.tsx` and `page.module.scss`
- Minimal logic - delegates to page-specific components

### `/src/pages` - Page-Specific Components
- Components that are specific to a particular page
- Organized by page (home, about, courses, etc.)
- Each page folder has an `index.ts` for barrel exports
- Contains both component logic and styles

### `/src/components` - Reusable Components
- Components that can be used across multiple pages
- Organized by category:
  - `ui/` - Generic UI components (Button, Input, Modal, etc.)
  - `layout/` - Layout components (Header, Footer)
  - `common/` - Common wrappers (Container, Section)
  - `animations/` - Animation components
  - `courses/` - Course-specific reusable components
  - `providers/` - Context providers

### `/src/hooks` - Custom React Hooks
- Reusable React hooks for common functionality
- All hooks are exported from `index.ts`
- Examples: useMediaQuery, useScrollPosition, useLocalStorage

### `/src/utils` - Utility Functions
- Pure JavaScript/TypeScript utility functions
- Organized by category:
  - `format.ts` - Formatting functions
  - `validation.ts` - Validation functions
  - `helpers.ts` - General helper functions

### `/src/constants` - Application Constants
- All application-wide constants in one place
- Includes configuration, navigation, breakpoints, messages, etc.
- Uses `as const` for type safety

### `/src/types` - TypeScript Types
- All TypeScript interfaces and types
- Centralized type definitions
- Exported from single `index.ts`

### `/src/store` - Redux State Management
- Redux Toolkit store configuration
- Slices for different state domains (cart, auth)
- Typed hooks for Redux

### `/src/data` - Static Data
- JSON files with static data
- Used for courses, blogs, categories, testimonials

### `/src/styles` - Global Styles
- SCSS variables, mixins, and global styles
- Shared across all components

## 🎯 Import Patterns

### Page Components
```typescript
// Import from pages folder
import { Hero, FeaturedCourses, Categories } from '@/pages/home';
```

### Reusable Components
```typescript
// Import from components folder
import { Button, Input, Modal } from '@/components/ui';
import { Header, Footer } from '@/components/layout';
import { Container, Section } from '@/components/common';
```

### Hooks
```typescript
// Import from hooks folder
import { useMediaQuery, useIsMobile, useScrollPast } from '@/hooks';
```

### Utils
```typescript
// Import from utils folder
import { formatCurrency, isValidEmail, generateSlug } from '@/utils';
```

### Constants
```typescript
// Import from constants folder
import { SITE_CONFIG, NAV_LINKS, BREAKPOINTS } from '@/constants';
```

### Types
```typescript
// Import from types folder
import type { Course, Blog, User } from '@/types';
```

### Store
```typescript
// Import from store folder
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addToCart, removeFromCart } from '@/store/cartSlice';
```

## 🔄 Component Organization Pattern

Each component follows this structure:

```
ComponentName/
├── ComponentName.tsx           # Component logic
├── ComponentName.module.scss   # Component styles
└── index.ts                    # Barrel export (optional)
```

## 📝 Naming Conventions

### Files
- Components: `PascalCase.tsx` (e.g., `Button.tsx`)
- Styles: `PascalCase.module.scss` (e.g., `Button.module.scss`)
- Hooks: `camelCase.ts` (e.g., `useMediaQuery.ts`)
- Utils: `camelCase.ts` (e.g., `format.ts`)
- Types: `camelCase.ts` or `PascalCase.ts`

### Exports
- Named exports for utilities, hooks, and types
- Default exports for components
- Barrel exports (`index.ts`) for cleaner imports

## 🎨 Styling Architecture

### SCSS Modules
- Component-scoped styles using CSS Modules
- Global styles in `/src/styles`
- Variables and mixins shared across components

### Import Pattern
```scss
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.component {
  @include flex-center;
  color: $primary;
}
```

## 🚀 Benefits of This Structure

1. **Clear Separation of Concerns**
   - Routes vs. Components vs. Logic
   - Easy to find and modify code

2. **Reusability**
   - Components can be easily reused
   - Hooks and utils are centralized

3. **Scalability**
   - Easy to add new pages and features
   - Organized structure supports growth

4. **Type Safety**
   - Centralized type definitions
   - Better IDE support

5. **Maintainability**
   - Consistent patterns
   - Easy onboarding for new developers

6. **Performance**
   - Code splitting by route
   - Lazy loading support

## 📚 Best Practices

1. **Keep routes minimal** - Delegate logic to page components
2. **Use barrel exports** - Simplify imports with `index.ts`
3. **Colocate styles** - Keep styles next to components
4. **Type everything** - Use TypeScript for all code
5. **Extract reusable logic** - Create hooks and utils
6. **Use constants** - Avoid magic strings and numbers
7. **Follow naming conventions** - Consistent naming across project

## 🔧 Development Workflow

1. **Adding a new page:**
   - Create route in `/src/app`
   - Create page components in `/src/pages`
   - Import and use in route

2. **Adding a new component:**
   - Create in appropriate `/src/components` subfolder
   - Add types to `/src/types`
   - Export from `index.ts` if needed

3. **Adding a new hook:**
   - Create in `/src/hooks`
   - Export from `/src/hooks/index.ts`
   - Use across components

4. **Adding utilities:**
   - Add to appropriate file in `/src/utils`
   - Export from `/src/utils/index.ts`

---

**This structure provides a solid foundation for building and scaling the EduNova platform!**

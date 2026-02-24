# EduNova - Modern Education Platform

A fully responsive, modern education platform built with Next.js 14, TypeScript, SCSS Modules, and Framer Motion.

## 🚀 Features

### Pages
- **Home** - Hero section with animated blobs, featured courses, categories, testimonials, and newsletter
- **About** - Company info, mission, animated timeline, and statistics with counters
- **Courses** - Search, filter by category/level, sort functionality, responsive grid
- **Course Detail** - Full course information, curriculum accordion, instructor details, sticky pricing
- **Blog** - Blog grid with featured posts and category filtering
- **Blog Detail** - Individual blog post with related articles
- **Contact** - Contact form with validation and info cards
- **Cart** - Add/remove courses, quantity management, localStorage persistence
- **Checkout** - Multi-step form with billing and payment information
- **Auth** - Login and signup pages with form validation

### UI Components
- Button (multiple variants and sizes)
- Input (with label and error states)
- Badge (color variants)
- Modal (animated with backdrop)
- Accordion (expandable sections)
- Loading Spinner

### Animations
- Scroll reveal effects with Framer Motion
- Animated counters
- Floating background blobs
- Page transitions
- Smooth hover effects

### Features
- 🎨 Modern gradient design with glassmorphism
- 📱 Mobile-first responsive design
- 🌙 Dark mode support (structure ready)
- 🛒 Redux cart management with localStorage
- 🔐 Authentication system (Redux)
- 🎭 Framer Motion animations
- 📊 Dynamic data-driven architecture
- ♿ Accessibility-focused components

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** SCSS Modules
- **Animations:** Framer Motion
- **State Management:** Redux Toolkit
- **Form Handling:** React Hook Form

## 📁 Project Structure

```
edunova/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   └── signup/
│   │   ├── blog/
│   │   │   └── [slug]/
│   │   ├── cart/
│   │   ├── checkout/
│   │   │   └── success/
│   │   ├── contact/
│   │   ├── courses/
│   │   │   └── [slug]/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── animations/         # Reusable animation components
│   │   ├── common/             # Common components (Container, Section)
│   │   ├── courses/            # Course-related components
│   │   ├── home/               # Home page sections
│   │   ├── layout/             # Header & Footer
│   │   ├── providers/          # Redux Provider
│   │   └── ui/                 # Reusable UI components
│   ├── data/                   # JSON data files
│   │   ├── blogs.json
│   │   ├── categories.json
│   │   ├── courses.json
│   │   └── testimonials.json
│   ├── store/                  # Redux store
│   │   ├── authSlice.ts
│   │   ├── cartSlice.ts
│   │   ├── hooks.ts
│   │   └── store.ts
│   └── styles/                 # Global styles
│       ├── globals.scss
│       ├── mixins.scss
│       └── variables.scss
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd edunova
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Colors
- Primary: #6366f1 (Indigo)
- Secondary: #ec4899 (Pink)
- Accent: #f59e0b (Amber)
- Success: #10b981 (Green)
- Error: #ef4444 (Red)

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: 1024px - 1200px
- Wide: 1200px+

### Typography
- Headings: Inter font family
- Body: System font stack
- Responsive font sizes using clamp()

## 📦 Key Dependencies

```json
{
  "next": "^15.x",
  "react": "^19.x",
  "typescript": "^5.x",
  "sass": "^1.x",
  "framer-motion": "^11.x",
  "@reduxjs/toolkit": "^2.x",
  "react-redux": "^9.x",
  "react-hook-form": "^7.x"
}
```

## 🔧 Configuration

### SCSS Modules
All component styles use SCSS modules for scoped styling. Global styles and variables are in `src/styles/`.

### Redux Store
- `authSlice`: User authentication state
- `cartSlice`: Shopping cart with localStorage persistence

### Framer Motion
Animations are configured for optimal performance with reduced motion support.

## 📱 Responsive Design

The platform follows a mobile-first approach:
- Single column on mobile
- 2 columns on tablet
- 3-4 columns on desktop
- Hamburger menu for mobile navigation
- Sticky header and pricing cards

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states
- Color contrast compliance

## 🚀 Performance

- Next.js Image optimization
- Code splitting by route
- Lazy loading components
- Optimized animations
- Minimal bundle size

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Developer

Built with ❤️ using Next.js, TypeScript, SCSS, and Framer Motion.

---

**EduNova** - Transform Your Future with Online Learning

# EduNova - Book Animation System Guide

## 🎯 Overview

A complete book-style page flip animation system has been integrated into your EduNova website. The system provides:

1. **Global Route Transitions** - Pages flip like a book when navigating between routes
2. **Section-Level Flipping** - Individual sections within a page can flip like book pages
3. **Fully Responsive** - Works smoothly on mobile, tablet, and desktop
4. **Touch Gestures** - Swipe support on mobile devices
5. **Keyboard Navigation** - Arrow keys for desktop navigation

---

## 📦 Components Created

### 1. BookLayout
**Location:** `src/components/book/BookLayout.tsx`

Wraps the entire application to provide global page flip transitions between routes.

**Features:**
- 3D page flip animation on route changes
- Book opening animation on first load
- Realistic page shadows and edges
- Book spine effect on desktop
- Paper texture background
- Perspective and depth effects

**Already Integrated:** ✅ Automatically applied to all pages via `layout.tsx`

---

### 2. FlipController
**Location:** `src/components/book/FlipController.tsx`

Controls section-level page flipping within a single page.

**Features:**
- Navigate between sections with flip animation
- Next/Previous buttons
- Swipe gesture support (mobile)
- Keyboard navigation (arrow keys)
- Prevents rapid navigation during animation
- Page indicators

**Usage:**
```typescript
import { FlipController } from '@/components/book';

const sections = [
  <Section1 key="1" />,
  <Section2 key="2" />,
  <Section3 key="3" />,
];

<FlipController sections={sections} enableSwipe={true} />
```

---

### 3. SectionPage
**Location:** `src/components/book/SectionPage.tsx`

Individual page wrapper for sections with flip animation.

**Features:**
- 3D flip animation
- Page number display
- Proper z-index management
- Transform origin handling

**Usage:** Automatically used by FlipController

---

### 4. PageIndicator
**Location:** `src/components/book/PageIndicator.tsx`

Shows current page and allows direct navigation.

**Features:**
- Dot indicators for each page
- Current page counter (e.g., "3 / 5")
- Click to jump to specific page
- Smooth animated transitions

**Usage:** Automatically included in FlipController

---

## 🚀 How to Use

### Option 1: Global Route Transitions (Already Active)

The BookLayout is already integrated in `src/app/layout.tsx`. All route transitions now have book flip animations automatically!

**What you get:**
- Navigate from Home → About → Courses → etc.
- Each route change flips like a book page
- First page load has a book opening animation

**No additional code needed!** ✅

---

### Option 2: Section-Level Flipping (Optional)

To add section flipping to any page:

#### Step 1: Import Components
```typescript
'use client';

import { FlipController } from '@/components/book';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
```

#### Step 2: Define Sections Array
```typescript
export default function MyPage() {
  const sections = [
    <Section1 key="section1" />,
    <Section2 key="section2" />,
    <Section3 key="section3" />,
  ];

  return <FlipController sections={sections} enableSwipe={true} />;
}
```

#### Example: Home Page with Section Flipping
```typescript
'use client';

import { FlipController } from '@/components/book';
import { Hero, FeaturedCourses, Categories, Testimonials, Newsletter } from '@/features/home';

export default function Home() {
  const sections = [
    <Hero key="hero" />,
    <FeaturedCourses key="courses" />,
    <Categories key="categories" />,
    <Testimonials key="testimonials" />,
    <Newsletter key="newsletter" />,
  ];

  return <FlipController sections={sections} enableSwipe={true} />;
}
```

---

## 🎨 Customization

### Adjust Animation Duration

**BookLayout.tsx:**
```typescript
transition: {
  duration: 0.8, // Change this (0.7 - 1.2 recommended)
  ease: [0.43, 0.13, 0.23, 0.96],
}
```

**FlipController.tsx:**
```typescript
setTimeout(() => setIsAnimating(false), 700); // Match animation duration
```

### Change Page Background Color

**BookLayout.module.scss:**
```scss
.bookPage {
  background: #fdf6e3; // Change to your preferred color
}
```

### Adjust Swipe Sensitivity

**FlipController.tsx:**
```typescript
const minSwipeDistance = 50; // Increase for less sensitive, decrease for more
```

### Disable Book Spine (Desktop)

**BookLayout.module.scss:**
```scss
.bookSpine {
  display: none; // Hide the spine
}
```

---

## 📱 Responsive Behavior

### Mobile (< 768px)
- Full-width book layout
- Swipe gestures enabled
- Smaller navigation buttons
- Simplified shadows for performance
- Touch-optimized controls

### Tablet (768px - 1024px)
- Centered book layout
- Swipe and button navigation
- Medium-sized controls
- Enhanced shadows

### Desktop (1024px+)
- Centered book with max-width
- Book spine visible in center
- Keyboard navigation (arrow keys)
- Larger navigation buttons
- Full shadow and depth effects
- Hover animations on buttons

---

## ⌨️ Navigation Controls

### Desktop
- **Arrow Right / Arrow Down** - Next page
- **Arrow Left / Arrow Up** - Previous page
- **Click Navigation Buttons** - Next/Previous
- **Click Page Dots** - Jump to specific page

### Mobile
- **Swipe Left** - Next page
- **Swipe Right** - Previous page
- **Tap Navigation Buttons** - Next/Previous
- **Tap Page Dots** - Jump to specific page

---

## 🎭 Animation Details

### Page Flip Animation
```typescript
// Forward flip
rotateY: 0 → -90deg
transformOrigin: right center

// Backward flip
rotateY: 0 → 90deg
transformOrigin: left center
```

### Timing
- **Duration:** 700-800ms
- **Easing:** Custom cubic-bezier [0.43, 0.13, 0.23, 0.96]
- **Cooldown:** 700ms between flips

### 3D Effects
- **Perspective:** 2000px (mobile), 2500px (desktop)
- **Transform Style:** preserve-3d
- **Backface Visibility:** hidden

---

## 🔧 Custom Hook

### useBookNavigation

**Location:** `src/hooks/useBookNavigation.ts`

For building custom book navigation:

```typescript
import { useBookNavigation } from '@/hooks';

const {
  currentPage,
  direction,
  isAnimating,
  goToPage,
  nextPage,
  previousPage,
  canGoNext,
  canGoPrevious,
} = useBookNavigation({
  totalPages: 5,
  onPageChange: (page) => console.log('Page changed to:', page),
});
```

---

## 🎨 Styling Classes

### Available SCSS Modules

1. **BookLayout.module.scss** - Global book container
2. **SectionPage.module.scss** - Individual page styling
3. **FlipController.module.scss** - Navigation controls
4. **PageIndicator.module.scss** - Page indicators

### Key Classes

```scss
.bookContainer      // Main book wrapper
.bookPerspective    // 3D perspective container
.bookPage           // Individual page
.pageContent        // Page content wrapper
.pageShadow         // Page shadow effect
.pageEdge           // Page edge highlight
.bookSpine          // Center spine (desktop)
.navButton          // Navigation buttons
.pageIndicator      // Page indicator container
```

---

## ⚡ Performance Optimizations

### Already Implemented

✅ **Hardware Acceleration**
```scss
will-change: transform, opacity;
```

✅ **GPU Rendering**
```scss
transform-style: preserve-3d;
backface-visibility: hidden;
```

✅ **Smooth 60fps**
- Optimized animation curves
- Minimal repaints
- Efficient z-index management

✅ **Mobile Optimizations**
- Reduced shadow complexity
- Simplified effects
- Touch event optimization

---

## 🐛 Troubleshooting

### Issue: Animation feels laggy
**Solution:** Reduce animation duration or simplify shadows

### Issue: Swipe not working on mobile
**Solution:** Ensure `enableSwipe={true}` is set in FlipController

### Issue: Pages overlap incorrectly
**Solution:** Check z-index in SectionPage component

### Issue: Book spine not visible
**Solution:** Check viewport width (only shows on desktop 1024px+)

---

## 📝 Example Implementations

### Example 1: Simple Page with Sections
```typescript
'use client';

import { FlipController } from '@/components/book';

export default function SimplePage() {
  const sections = [
    <div key="1"><h1>Section 1</h1></div>,
    <div key="2"><h1>Section 2</h1></div>,
    <div key="3"><h1>Section 3</h1></div>,
  ];

  return <FlipController sections={sections} />;
}
```

### Example 2: About Page with Sections
```typescript
'use client';

import { FlipController } from '@/components/book';
import Container from '@/components/common/Container';

export default function AboutPage() {
  const sections = [
    <Container key="intro">
      <h1>About Us</h1>
      <p>Company introduction...</p>
    </Container>,
    <Container key="mission">
      <h2>Our Mission</h2>
      <p>Mission statement...</p>
    </Container>,
    <Container key="team">
      <h2>Our Team</h2>
      <p>Team information...</p>
    </Container>,
  ];

  return <FlipController sections={sections} enableSwipe={true} />;
}
```

### Example 3: Course Detail with Sections
```typescript
'use client';

import { FlipController } from '@/components/book';

export default function CourseDetailPage() {
  const sections = [
    <CourseHero key="hero" />,
    <CourseOverview key="overview" />,
    <CourseCurriculum key="curriculum" />,
    <CourseInstructor key="instructor" />,
    <CourseReviews key="reviews" />,
  ];

  return <FlipController sections={sections} />;
}
```

---

## 🎯 Best Practices

### Do's ✅
- Use meaningful keys for sections
- Keep sections at reasonable heights
- Test on mobile devices
- Use the custom hook for complex navigation
- Maintain consistent animation durations

### Don'ts ❌
- Don't nest FlipControllers
- Don't use extremely long sections
- Don't disable animations without fallback
- Don't forget to test swipe gestures
- Don't override z-index without understanding

---

## 🔄 Migration Guide

### To Enable Section Flipping on Existing Pages

1. **Import FlipController:**
```typescript
import { FlipController } from '@/components/book';
```

2. **Wrap sections in array:**
```typescript
const sections = [
  <ExistingSection1 key="1" />,
  <ExistingSection2 key="2" />,
];
```

3. **Replace page content:**
```typescript
return <FlipController sections={sections} enableSwipe={true} />;
```

4. **Test navigation:**
- Click next/previous buttons
- Try swipe gestures on mobile
- Test keyboard navigation on desktop

---

## 📊 Component Props Reference

### FlipController Props
```typescript
interface FlipControllerProps {
  sections: React.ReactNode[];  // Array of section components
  enableSwipe?: boolean;         // Enable swipe gestures (default: true)
}
```

### SectionPage Props
```typescript
interface SectionPageProps {
  children: React.ReactNode;     // Section content
  isActive: boolean;              // Is this the current page
  direction: 'forward' | 'backward';  // Flip direction
  index: number;                  // Page index
}
```

### PageIndicator Props
```typescript
interface PageIndicatorProps {
  currentPage: number;            // Current page index
  totalPages: number;             // Total number of pages
  onPageClick: (pageIndex: number) => void;  // Page click handler
}
```

---

## 🎨 Design Tokens

### Colors
```scss
$page-background: #fdf6e3;      // Page color
$book-background: #f5f1e8;      // Book container
$shadow-color: rgba(0, 0, 0, 0.15);  // Shadow
$spine-color: rgba(139, 69, 19, 0.4);  // Spine
```

### Timing
```scss
$flip-duration: 0.7s;           // Flip animation
$flip-easing: cubic-bezier(0.43, 0.13, 0.23, 0.96);
```

### Dimensions
```scss
$perspective: 2000px;           // Mobile
$perspective-desktop: 2500px;   // Desktop
$spine-width: 20px;             // Book spine
```

---

## ✨ Summary

### What's Included

✅ **Global Route Transitions** - Automatic book flip between pages
✅ **Section Flipping** - Optional flip navigation within pages
✅ **Touch Gestures** - Swipe support on mobile
✅ **Keyboard Navigation** - Arrow keys on desktop
✅ **Page Indicators** - Visual feedback and navigation
✅ **Responsive Design** - Mobile, tablet, desktop optimized
✅ **Performance Optimized** - 60fps smooth animations
✅ **Customizable** - Easy to adjust colors, timing, behavior

### Quick Start

1. **Global transitions:** Already working! Navigate between pages.
2. **Section flipping:** Use `<FlipController sections={[...]} />`
3. **Customize:** Edit SCSS modules to match your design
4. **Test:** Try on mobile and desktop

---

**Your EduNova website now has a complete book animation system!** 📚✨

The system is production-ready, fully responsive, and seamlessly integrated without breaking any existing functionality.

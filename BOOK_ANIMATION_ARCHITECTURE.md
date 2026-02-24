# 📚 Book Animation System - Architecture

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Root Layout (layout.tsx)                 │
│  ┌───────────────────────────────────────────────────────┐  │
│  │              BookLayout Component                      │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │         Global Page Flip Animation              │  │  │
│  │  │  • Route transitions (Home → About → etc.)      │  │  │
│  │  │  • 3D rotateY animation                         │  │  │
│  │  │  • Book opening on first load                   │  │  │
│  │  │  • Paper texture & shadows                      │  │  │
│  │  │  • Book spine (desktop)                         │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  │                                                         │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │              Page Content                        │  │  │
│  │  │  • Header                                        │  │  │
│  │  │  • Main (children)                               │  │  │
│  │  │  • Footer                                        │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔄 Two-Level Animation System

### Level 1: Global Route Transitions (Automatic)

```
User clicks navigation link
         ↓
Next.js route change
         ↓
BookLayout detects pathname change
         ↓
AnimatePresence triggers
         ↓
Page flips with 3D animation
         ↓
New page content loads
```

**Status:** ✅ Already active on all pages

---

### Level 2: Section Flipping (Optional)

```
Page with FlipController
         ↓
User clicks Next/swipes/presses arrow
         ↓
FlipController updates currentPage
         ↓
SectionPage animates with 3D flip
         ↓
New section becomes active
         ↓
PageIndicator updates
```

**Status:** ✅ Ready to use - add to any page

---

## 📦 Component Hierarchy

```
BookLayout (Global)
└── AnimatePresence
    └── motion.div (Page)
        ├── pageContent
        │   ├── Header
        │   ├── Main
        │   │   └── FlipController (Optional)
        │   │       ├── pagesContainer
        │   │       │   └── AnimatePresence
        │   │       │       └── SectionPage (multiple)
        │   │       │           ├── pageInner (content)
        │   │       │           └── pageNumber
        │   │       ├── navButton (prev)
        │   │       ├── navButton (next)
        │   │       └── PageIndicator
        │   │           ├── dots
        │   │           └── pageCount
        │   └── Footer
        ├── pageShadow
        └── pageEdge
```

---

## 🎭 Animation Flow

### Global Page Flip

```
Initial State (Page A)
         ↓
User navigates to Page B
         ↓
┌─────────────────────────────────┐
│  Page A                          │
│  rotateY: 0° → -90°             │
│  opacity: 1 → 0                  │
│  transformOrigin: right center   │
│  duration: 800ms                 │
└─────────────────────────────────┘
         ↓
┌─────────────────────────────────┐
│  Page B                          │
│  rotateY: 90° → 0°              │
│  opacity: 0 → 1                  │
│  transformOrigin: left center    │
│  duration: 800ms                 │
└─────────────────────────────────┘
         ↓
Final State (Page B)
```

---

### Section Flip

```
Section 1 Active
         ↓
User clicks Next
         ↓
┌─────────────────────────────────┐
│  Section 1 (Exit)                │
│  rotateY: 0° → -90°             │
│  opacity: 1 → 0                  │
│  zIndex: 2 → 0                   │
│  duration: 700ms                 │
└─────────────────────────────────┘
         ↓
┌─────────────────────────────────┐
│  Section 2 (Enter)               │
│  rotateY: 90° → 0°              │
│  opacity: 0 → 1                  │
│  zIndex: 1 → 2                   │
│  duration: 700ms                 │
└─────────────────────────────────┘
         ↓
Section 2 Active
```

---

## 🎨 Styling Layers

```
┌─────────────────────────────────────────┐
│  bookContainer                           │  ← Background gradient
│  ┌───────────────────────────────────┐  │
│  │  bookPerspective                   │  │  ← 3D perspective
│  │  ┌─────────────────────────────┐  │  │
│  │  │  bookPage                    │  │  │  ← Paper texture
│  │  │  ┌───────────────────────┐  │  │  │
│  │  │  │  pageContent           │  │  │  │  ← Actual content
│  │  │  │  • Header              │  │  │  │
│  │  │  │  • Main                │  │  │  │
│  │  │  │  • Footer              │  │  │  │
│  │  │  └───────────────────────┘  │  │  │
│  │  │  pageShadow (right edge)    │  │  │  ← Shadow effect
│  │  │  pageEdge (right border)    │  │  │  ← Edge highlight
│  │  └─────────────────────────────┘  │  │
│  └───────────────────────────────────┘  │
│  bookSpine (center, desktop only)       │  ← Book spine
└─────────────────────────────────────────┘
```

---

## 🔧 State Management

### BookLayout State
```typescript
- pathname (from usePathname)
- isFirstLoad (boolean)
- direction ('forward' | 'backward')
```

### FlipController State
```typescript
- currentPage (number)
- direction ('forward' | 'backward')
- isAnimating (boolean)
- touchStart (number | null)
- touchEnd (number | null)
```

### useBookNavigation Hook
```typescript
Returns:
- currentPage
- direction
- isAnimating
- goToPage(index)
- nextPage()
- previousPage()
- canGoNext
- canGoPrevious
```

---

## 📱 Responsive Behavior

```
Mobile (< 768px)
├── Full-width layout
├── Simplified shadows
├── Touch gestures enabled
├── Smaller buttons
└── No book spine

Tablet (768px - 1024px)
├── Centered layout
├── Enhanced shadows
├── Touch + button navigation
└── No book spine

Desktop (1024px+)
├── Centered with max-width
├── Full shadow effects
├── Keyboard navigation
├── Larger buttons
└── Book spine visible
```

---

## ⚡ Performance Optimizations

```
CSS Level
├── will-change: transform, opacity
├── transform-style: preserve-3d
├── backface-visibility: hidden
└── Hardware acceleration

JavaScript Level
├── Animation cooldown (700ms)
├── Prevent rapid navigation
├── Efficient state updates
└── Debounced touch events

React Level
├── AnimatePresence for smooth transitions
├── Proper key management
├── Minimal re-renders
└── Memoized callbacks
```

---

## 🎯 Data Flow

### Global Transitions

```
User Action
    ↓
Navigation Link Click
    ↓
Next.js Router
    ↓
pathname changes
    ↓
BookLayout useEffect
    ↓
AnimatePresence detects key change
    ↓
Animation variants applied
    ↓
Page flips
    ↓
New content rendered
```

### Section Navigation

```
User Action (click/swipe/keyboard)
    ↓
Event Handler
    ↓
Check if animation in progress
    ↓
Update currentPage state
    ↓
Set direction (forward/backward)
    ↓
Set isAnimating = true
    ↓
SectionPage receives new props
    ↓
Animation variants applied
    ↓
Section flips
    ↓
setTimeout completes
    ↓
Set isAnimating = false
```

---

## 🔌 Integration Points

### 1. Root Layout
```typescript
// src/app/layout.tsx
<BookLayout>
  <Header />
  <main>{children}</main>
  <Footer />
</BookLayout>
```

### 2. Any Page (Optional)
```typescript
// src/app/[page]/page.tsx
<FlipController sections={[...]} />
```

### 3. Custom Implementation
```typescript
// Custom component
const { nextPage, previousPage } = useBookNavigation({ totalPages: 5 });
```

---

## 📊 File Dependencies

```
BookLayout.tsx
├── Imports: framer-motion, next/navigation
├── Uses: AnimatePresence, motion, usePathname
└── Styles: BookLayout.module.scss

FlipController.tsx
├── Imports: framer-motion, SectionPage, PageIndicator
├── Uses: AnimatePresence, useState, useEffect
└── Styles: FlipController.module.scss

SectionPage.tsx
├── Imports: framer-motion
├── Uses: motion
└── Styles: SectionPage.module.scss

PageIndicator.tsx
├── Imports: framer-motion
├── Uses: motion
└── Styles: PageIndicator.module.scss

useBookNavigation.ts
├── Imports: react
└── Uses: useState, useCallback, useEffect
```

---

## 🎨 CSS Architecture

```
Global Styles (globals.scss)
    ↓
Variables (variables.scss)
    ↓
Mixins (mixins.scss)
    ↓
Component Modules
├── BookLayout.module.scss
├── FlipController.module.scss
├── SectionPage.module.scss
└── PageIndicator.module.scss
```

---

## 🔄 Animation Timing

```
Timeline (Global Page Flip):

0ms     ─── Page A visible (rotateY: 0°)
        │
400ms   ─── Page A halfway (rotateY: -45°)
        │
800ms   ─── Page A hidden (rotateY: -90°)
        │   Page B starts (rotateY: 90°)
        │
1200ms  ─── Page B halfway (rotateY: 45°)
        │
1600ms  ─── Page B visible (rotateY: 0°)
```

---

## 🎯 Key Concepts

### Transform Origin
```
Forward Flip:
├── Exit: transformOrigin: right center
└── Enter: transformOrigin: left center

Backward Flip:
├── Exit: transformOrigin: left center
└── Enter: transformOrigin: right center
```

### Z-Index Management
```
Active Page: z-index: 2
Entering Page: z-index: 1
Exiting Page: z-index: 0
```

### Perspective
```
Mobile: perspective: 2000px
Desktop: perspective: 2500px
Origin: center center
```

---

## ✨ Summary

The book animation system consists of:

1. **BookLayout** - Global wrapper for route transitions
2. **FlipController** - Optional section navigation
3. **SectionPage** - Individual section wrapper
4. **PageIndicator** - Navigation feedback
5. **useBookNavigation** - Custom hook for logic

All components work together to create a seamless book-like experience with:
- 3D page flip animations
- Touch gesture support
- Keyboard navigation
- Responsive design
- Performance optimization

**Status:** ✅ Fully integrated and production-ready!

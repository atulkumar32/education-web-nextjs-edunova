# 🚀 Quick Start Guide - EduNova

Get up and running with EduNova in less than 5 minutes!

## Prerequisites

Before you begin, ensure you have:
- ✅ Node.js 18.x or higher installed
- ✅ npm (comes with Node.js)
- ✅ A code editor (VS Code recommended)
- ✅ A modern web browser

## Installation Steps

### Step 1: Navigate to Project Directory

```bash
cd edunova
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages (~356 packages).

### Step 3: Start Development Server

```bash
npm run dev
```

You should see output like:
```
▲ Next.js 16.1.6
- Local:        http://localhost:3000
- Ready in 2.5s
```

### Step 4: Open in Browser

Open your browser and navigate to:
```
http://localhost:3000
```

🎉 **That's it!** You should now see the EduNova homepage.

## What You'll See

### Home Page
- Animated hero section with floating blobs
- Featured courses section
- Categories grid
- Testimonials slider
- Newsletter subscription

### Navigation
Click on the navigation links to explore:
- **Home** - Landing page
- **About** - Company information
- **Courses** - Browse all courses
- **Blog** - Read blog posts
- **Contact** - Contact form

### Try These Features

1. **Browse Courses**
   - Click "Courses" in navigation
   - Use search bar to find courses
   - Filter by category or level
   - Sort by different criteria

2. **View Course Details**
   - Click on any course card
   - See full course information
   - Check curriculum
   - Add to cart

3. **Shopping Cart**
   - Click cart icon (🛒) in header
   - Add/remove courses
   - Adjust quantities
   - Proceed to checkout

4. **Authentication**
   - Click "Login" button
   - Try the login form
   - Switch to signup page

5. **Contact Form**
   - Click "Contact" in navigation
   - Fill out the form
   - Submit and see success message

## Available Scripts

### Development
```bash
npm run dev
```
Starts the development server on http://localhost:3000

### Production Build
```bash
npm run build
```
Creates an optimized production build

### Start Production Server
```bash
npm start
```
Runs the production build (must run `npm run build` first)

### Lint Code
```bash
npm run lint
```
Checks code for errors and style issues

## Project Structure Overview

```
edunova/
├── src/
│   ├── app/              # Pages (Home, About, Courses, etc.)
│   ├── components/       # Reusable components
│   ├── data/            # JSON data files
│   ├── store/           # Redux state management
│   └── styles/          # Global styles
├── public/              # Static files
└── package.json         # Dependencies
```

## Common Issues & Solutions

### Issue: Port 3000 already in use
**Solution:** Use a different port
```bash
PORT=3001 npm run dev
```

### Issue: Module not found errors
**Solution:** Reinstall dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Styles not loading
**Solution:** Clear Next.js cache
```bash
rm -rf .next
npm run dev
```

### Issue: TypeScript errors
**Solution:** Check TypeScript version
```bash
npm list typescript
```

## Exploring the Code

### Key Files to Check

1. **Home Page**
   - File: `src/app/page.tsx`
   - Components: `src/components/home/`

2. **Courses Page**
   - File: `src/app/courses/page.tsx`
   - Components: `src/components/courses/`

3. **Redux Store**
   - Files: `src/store/`
   - Cart: `src/store/cartSlice.ts`
   - Auth: `src/store/authSlice.ts`

4. **UI Components**
   - Files: `src/components/ui/`
   - Button, Input, Modal, etc.

5. **Styles**
   - Variables: `src/styles/variables.scss`
   - Mixins: `src/styles/mixins.scss`
   - Global: `src/styles/globals.scss`

## Making Your First Change

### Example: Change Hero Title

1. Open `src/components/home/Hero.tsx`

2. Find the title:
```typescript
<h1 className={styles.title}>
  Transform Your Future with <span className="text-gradient">Online Learning</span>
</h1>
```

3. Change it to:
```typescript
<h1 className={styles.title}>
  Start Learning Today with <span className="text-gradient">EduNova</span>
</h1>
```

4. Save the file - changes will appear automatically!

### Example: Add a New Course

1. Open `src/data/courses.json`

2. Add a new course object:
```json
{
  "id": 7,
  "slug": "your-course-slug",
  "title": "Your Course Title",
  "description": "Course description",
  "instructor": {
    "name": "Your Name",
    "avatar": "/instructors/you.jpg",
    "title": "Your Title",
    "bio": "Your bio"
  },
  "price": 49.99,
  "originalPrice": 99.99,
  "category": "Web Development",
  "level": "Beginner",
  "duration": "20 hours",
  "students": 1000,
  "rating": 4.9,
  "reviews": 250,
  "image": "/courses/your-course.jpg",
  "featured": false,
  "bestseller": false
}
```

3. Save and refresh - your course will appear!

## Next Steps

### Learn More
1. Read [README.md](./README.md) for full documentation
2. Check [FEATURES.md](./FEATURES.md) for feature details
3. Review [DEVELOPMENT.md](./DEVELOPMENT.md) for development guidelines
4. See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment options

### Customize
1. Update colors in `src/styles/variables.scss`
2. Modify data in `src/data/` files
3. Add new components in `src/components/`
4. Create new pages in `src/app/`

### Deploy
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

## Getting Help

### Documentation
- 📖 [README.md](./README.md) - Main documentation
- 🎯 [FEATURES.md](./FEATURES.md) - Feature list
- 💻 [DEVELOPMENT.md](./DEVELOPMENT.md) - Development guide
- 🚀 [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide

### External Resources
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion)

## Tips for Success

1. **Start Small** - Explore one page at a time
2. **Read the Code** - Comments explain key concepts
3. **Experiment** - Try changing things and see what happens
4. **Use DevTools** - React and Redux DevTools are helpful
5. **Check Console** - Browser console shows errors and warnings

## Keyboard Shortcuts (VS Code)

- `Ctrl/Cmd + P` - Quick file open
- `Ctrl/Cmd + Shift + F` - Search in files
- `Ctrl/Cmd + B` - Toggle sidebar
- `Ctrl/Cmd + `` - Toggle terminal
- `F12` - Go to definition

## Browser DevTools

- `F12` or `Ctrl/Cmd + Shift + I` - Open DevTools
- `Ctrl/Cmd + Shift + C` - Inspect element
- `Ctrl/Cmd + Shift + M` - Toggle device toolbar (responsive)

## Congratulations! 🎉

You're now ready to explore and customize EduNova!

### What's Next?
- ✅ Explore all pages
- ✅ Try all features
- ✅ Customize the design
- ✅ Add your own content
- ✅ Deploy to production

---

**Happy Coding!** 💻✨

Need help? Check the documentation files or create an issue on GitHub.

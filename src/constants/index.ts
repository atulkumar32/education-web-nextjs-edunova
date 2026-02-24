// Site Configuration
export const SITE_CONFIG = {
  name: 'EduNova',
  title: 'EduNova - Transform Your Future with Online Learning',
  description: 'Master new skills with expert-led online courses. Web development, data science, design, and more.',
  url: 'https://edunova.com',
  author: 'EduNova Team',
} as const;

// Navigation Links
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/courses', label: 'Courses' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
] as const;

// Breakpoints (matching SCSS variables)
export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  wide: 1200,
  ultraWide: 1440,
} as const;

// Animation Variants
export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
} as const;

// Transition Presets
export const TRANSITIONS = {
  fast: { duration: 0.15, ease: 'easeInOut' },
  base: { duration: 0.3, ease: 'easeInOut' },
  slow: { duration: 0.5, ease: 'easeInOut' },
  spring: { type: 'spring', stiffness: 300, damping: 30 },
} as const;

// Course Levels
export const COURSE_LEVELS = [
  'All Levels',
  'Beginner',
  'Intermediate',
  'Advanced',
] as const;

// Course Categories
export const COURSE_CATEGORIES = [
  'All Categories',
  'Web Development',
  'Data Science',
  'Design',
  'Business',
  'Marketing',
  'Photography',
  'Music',
  'Health & Fitness',
] as const;

// Sort Options
export const SORT_OPTIONS = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'newest', label: 'Newest First' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
] as const;

// Social Links
export const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://facebook.com', icon: 'facebook' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'YouTube', url: 'https://youtube.com', icon: 'youtube' },
] as const;

// Footer Links
export const FOOTER_LINKS = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
    { label: 'Blog', href: '/blog' },
  ],
  resources: [
    { label: 'Courses', href: '/courses' },
    { label: 'Tutorials', href: '/tutorials' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Community', href: '/community' },
  ],
  support: [
    { label: 'Help Center', href: '/help' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Terms of Service', href: '/terms' },
  ],
} as const;

// Contact Information
export const CONTACT_INFO = {
  email: 'hello@edunova.com',
  phone: '+1 (555) 123-4567',
  address: '123 Learning Street, Education City, EC 12345',
  hours: 'Mon - Fri: 9:00 AM - 6:00 PM',
} as const;

// Stats for About Page
export const STATS = [
  { value: 50000, label: 'Students Enrolled', suffix: '+' },
  { value: 500, label: 'Expert Instructors', suffix: '+' },
  { value: 1000, label: 'Online Courses', suffix: '+' },
  { value: 95, label: 'Success Rate', suffix: '%' },
] as const;

// Form Validation Messages
export const VALIDATION_MESSAGES = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  minLength: (min: number) => `Minimum ${min} characters required`,
  maxLength: (max: number) => `Maximum ${max} characters allowed`,
  password: 'Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number',
  match: 'Passwords do not match',
} as const;

// API Endpoints (for future backend integration)
export const API_ENDPOINTS = {
  courses: '/api/courses',
  course: (slug: string) => `/api/courses/${slug}`,
  blogs: '/api/blogs',
  blog: (slug: string) => `/api/blogs/${slug}`,
  contact: '/api/contact',
  newsletter: '/api/newsletter',
  auth: {
    login: '/api/auth/login',
    signup: '/api/auth/signup',
    logout: '/api/auth/logout',
  },
  cart: '/api/cart',
  checkout: '/api/checkout',
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  cart: 'edunova_cart',
  user: 'edunova_user',
  theme: 'edunova_theme',
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  generic: 'Something went wrong. Please try again.',
  network: 'Network error. Please check your connection.',
  notFound: 'The requested resource was not found.',
  unauthorized: 'You need to be logged in to access this.',
  serverError: 'Server error. Please try again later.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  addedToCart: 'Course added to cart successfully!',
  removedFromCart: 'Course removed from cart',
  orderPlaced: 'Order placed successfully!',
  messageSent: 'Message sent successfully!',
  subscribed: 'Successfully subscribed to newsletter!',
  loginSuccess: 'Welcome back!',
  signupSuccess: 'Account created successfully!',
} as const;

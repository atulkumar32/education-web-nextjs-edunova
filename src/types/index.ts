// Course Types
export interface Course {
  id: number;
  slug: string;
  title: string;
  description: string;
  instructor: Instructor;
  price: number;
  originalPrice?: number;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  students: number;
  rating: number;
  reviews: number;
  image: string;
  featured?: boolean;
  bestseller?: boolean;
  new?: boolean;
  curriculum?: CurriculumSection[];
  requirements?: string[];
  whatYouWillLearn?: string[];
  relatedCourses?: number[];
}

export interface Instructor {
  name: string;
  avatar: string;
  title: string;
  bio: string;
  students?: number;
  courses?: number;
  rating?: number;
}

export interface CurriculumSection {
  id: number;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: number;
  title: string;
  duration: string;
  type: 'video' | 'article' | 'quiz';
  preview?: boolean;
}

// Blog Types
export interface Blog {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  author: Author;
  category: string;
  tags: string[];
  image: string;
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  relatedPosts?: number[];
}

export interface Author {
  name: string;
  avatar: string;
  bio: string;
}

// Category Types
export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: string;
  courseCount: number;
  color: string;
}

// Testimonial Types
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

// Cart Types
export interface CartItem {
  courseId: number;
  title: string;
  price: number;
  image: string;
  instructor: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
}

// Auth Types
export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  role: 'student' | 'instructor' | 'admin';
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}

export interface LoginFormData {
  email: string;
  password: string;
  remember?: boolean;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

export interface CheckoutFormData {
  // Billing Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Address
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  
  // Payment
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}

// Filter Types
export interface CourseFilters {
  search: string;
  category: string;
  level: string;
  sortBy: string;
}

export interface BlogFilters {
  search: string;
  category: string;
}

// Component Props Types
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
}

// Animation Types
export interface AnimationVariant {
  hidden: {
    opacity: number;
    x?: number;
    y?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    x?: number;
    y?: number;
    scale?: number;
  };
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  totalPages: number;
  totalItems: number;
  hasMore: boolean;
}

// Utility Types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type ID = string | number;

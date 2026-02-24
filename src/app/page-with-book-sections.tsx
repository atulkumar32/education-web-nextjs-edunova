'use client';

// EXAMPLE: How to use FlipController for section-based page flipping
// You can apply this pattern to any page

import { FlipController } from '@/components/book';
import { Hero, FeaturedCourses, Categories, Testimonials, Newsletter } from '@/features/home';

export default function HomeWithBookSections() {
  // Define your sections as an array
  const sections = [
    <Hero key="hero" />,
    <FeaturedCourses key="courses" />,
    <Categories key="categories" />,
    <Testimonials key="testimonials" />,
    <Newsletter key="newsletter" />,
  ];

  return (
    <FlipController 
      sections={sections} 
      enableSwipe={true}
    />
  );
}

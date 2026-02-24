import { Hero, FeaturedCourses, Categories, Testimonials, Newsletter } from '@/features/home';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCourses />
      <Categories />
      <Testimonials />
      <Newsletter />
    </>
  );
}
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  
  // Enable SCSS modules
  sassOptions: {
    includePaths: ['./src/styles'],
  },
};

export default nextConfig;

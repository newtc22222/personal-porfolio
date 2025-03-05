import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/personal-porfolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

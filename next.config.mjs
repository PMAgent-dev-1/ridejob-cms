import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/ssw/:path*',
        destination: 'https://your-ssw-app-deployment-url.vercel.app/ssw/:path*',
      },
    ]
  }
};

export default nextConfig;

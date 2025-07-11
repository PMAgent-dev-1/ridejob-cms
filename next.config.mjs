/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';   // ← 追加

const nextConfig = {
  basePath,                 // ← 追加
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.microcms-assets.io' },
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'storage.googleapis.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      /* Cloudflare 経由の画像 */
      { protocol: 'https', hostname: 'ridejob-cms-main.vercel.app' },
      { protocol: 'https', hostname: 'ridejob.jp', pathname: '/media/**' },
    ],
  },
};

export default nextConfig;
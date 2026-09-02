/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    // Only ship the specific icons/functions actually imported instead of
    // the whole library — cuts a meaningful chunk of client JS.
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;

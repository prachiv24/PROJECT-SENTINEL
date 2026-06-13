/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly tell Next.js to disable Turbopack
  experimental: {
    turbopack: false,
  },
  // Keep your existing configurations
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'storage.googleapis.com' },
      { protocol: 'https', hostname: 'firebasestorage.googleapis.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
}

export default nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Portfolio photos uploaded through Sanity Studio
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
};

export default nextConfig;

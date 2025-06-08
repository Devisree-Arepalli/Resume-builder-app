/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions:true, // if using
  },
};

module.exports = nextConfig;

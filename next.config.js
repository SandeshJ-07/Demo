/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    
   config.optimization.minify = false;
    return config;
  }
}

module.exports = nextConfig
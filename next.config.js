/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, {isServer}) => {
    config.devtool = 'cheap-module-source-map';
    return config;
  }
}

module.exports = nextConfig
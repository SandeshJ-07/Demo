/** @type {import('next').NextConfig} */
import WebpackReactComponentNamePlugin from 'webpack-react-component-name';

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, {isServer}) => {
    if(!isServer){
      config.plugins.push(
        new WebpackReactComponentNamePlugin()
        )
    }
    config.devtool = 'cheap-module-source-map';
    return config;
  }
}

module.exports = nextConfig
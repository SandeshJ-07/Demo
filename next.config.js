/** @type {import('next').NextConfig} */
const WebpackReactComponentNamePlugin = require('webpack-react-component-name');

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
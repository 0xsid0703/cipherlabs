module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  reactStrictMode: true,
  swcMinify: false,
  optimization: {
    minimize : false,
  },
  images: {
    unoptimized: true,
  },
};
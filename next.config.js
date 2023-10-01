module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};
module.exports = {
  webpack5: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.fallback = { fs: false };
    config.optimization.splitChunks.cacheGroups = {}
    config.optimization.minimize = true;

    return config;
  },
  reactStrictMode: true,
  swcMinify: false,
  optimization: {
    minimize: false,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    esmExternals: false,
  },
};
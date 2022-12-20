/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["s2.coinmarketcap.com", "s3.coinmarketcap.com"],
  },
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = nextConfig;

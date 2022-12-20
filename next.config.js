/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["https://s2.coinmarketcap.com", "https://s3.coinmarketcap.com"],
  },
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = nextConfig;

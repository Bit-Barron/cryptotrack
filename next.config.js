/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  images: {
    domains: ["s2.coinmarketcap.com"],
    domains: ["s3.coinmarketcap.com"],
  },
};

module.exports = nextConfig;

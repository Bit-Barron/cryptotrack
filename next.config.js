/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["s2.coinmarketcap.com", "s3.coinmarketcap.com"],
  },
  api: {
    responseLimit: "3mb",
  },
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = nextConfig;

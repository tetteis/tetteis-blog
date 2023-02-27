/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ["images.unsplash.com", "delinvon.sirv.com"],
  },
};

module.exports = nextConfig;

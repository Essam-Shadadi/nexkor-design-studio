/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  // You can add more Next.js config options here if needed
};

module.exports = withBundleAnalyzer(nextConfig);

/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: false,
  productionBrowserSourceMaps: false,
  i18n,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["api.salonchi.uz", "f8189e0b-salonchi.s3.timeweb.cloud"],
  },
};

module.exports = nextConfig;

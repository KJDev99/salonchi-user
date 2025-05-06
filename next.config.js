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
    domains: [
      "api.salonchi.uz",
      "f8189e0b-salonchi.s3.timeweb.cloud",
      "c4de9495-xuping.s3.timeweb.cloud",
      "s3.twcstorage.ru",
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.2.54",
        port: "8001",
        pathname: "/media/banner/uz/**",
      },
    ],
  },
};

module.exports = nextConfig;

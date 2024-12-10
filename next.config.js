// const withPWA = require("next-pwa")({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
//   // disable: process.env.NODE_ENV == 'development',
// });

const nextConfig = {
  /** @type {import('next').NextConfig} */
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/9t9yqf71okxk/**",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/hmtika-33b56.appspot.com/**",
      },
    ],
  },
};

module.exports = nextConfig;

const withMDX = require("@next/mdx")();

// const withPWA = require("next-pwa")({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
//   // disable: process.env.NODE_ENV == 'development',
// });

const nextConfig = {
  /** @type {import('next').NextConfig} */
  reactStrictMode: false,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/9t9yqf71okxk/**",
      },
    ],
  },
};

module.exports = withMDX(nextConfig);

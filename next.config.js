// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ["src"],
  },
  typescript: {
    tsconfigPath: "tsconfig.json",
  },
};

module.exports = nextConfig;

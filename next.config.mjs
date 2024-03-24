import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "dist",
  optimizeFonts: true,
};

const millionConfig = {
  auto: true,
};

export default million.next(nextConfig, millionConfig);

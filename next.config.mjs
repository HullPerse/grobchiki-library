import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "dist",
  optimizeFonts: true,
  serverRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
  // Will be available on both server and client
  publicRuntimeConfig: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

const millionConfig = {
  auto: true,
};

export default million.next(nextConfig, millionConfig);

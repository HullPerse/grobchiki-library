import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.discordapp.net",
        port: "",
        pathname: "/attachments/**",
      },
    ],
  },
};

const millionConfig = {
  auto: true,
};

export default million.next(nextConfig, millionConfig);

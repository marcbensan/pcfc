import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "conference.nbasbl.org",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
    ],
  },
};

export default nextConfig;

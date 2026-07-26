import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [{ source: "/", destination: "/design.html" }];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return ["/login", "/signin", "/signup"].map((source) => ({
      source,
      destination: "https://app.foobite.com/login",
      permanent: false,
    }));
  },
};

export default nextConfig;

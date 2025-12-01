import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages用の設定
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
    ],
  },
  // Turbopackを無効化（Google Fontsとの互換性の問題を回避）
  experimental: {
    turbo: false,
  },
};

export default nextConfig;

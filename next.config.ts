import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable experimental features for better SEO
  experimental: {
    optimizePackageImports: ["@/components"],
  },

  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compression
  compress: true,

  // Headers for better SEO and security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=86400",
          },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=86400",
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      // Add redirects as needed
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },

  // Rewrites for clean URLs
  async rewrites() {
    return [
      {
        source: "/sitemap",
        destination: "/sitemap.xml",
      },
      {
        source: "/robots",
        destination: "/robots.txt",
      },
    ];
  },

  // Performance optimizations
  poweredByHeader: false,
  generateEtags: true,

  // Static file optimization
  assetPrefix:
    process.env.NODE_ENV === "production" ? "https://readactify.com" : "",

  // Trailing slash handling for consistent URLs
  trailingSlash: false,
};

export default nextConfig;

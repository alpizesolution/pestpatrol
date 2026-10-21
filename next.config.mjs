/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.pestpatrolcdo.com",
      },
      {
        protocol: "https",
        hostname: "pub-d3988c15a0444a65afdec316aeeac989.r2.dev",
      },
      {
        protocol: "https",
        hostname: "**.r2.dev",
      },
      {
        protocol: "https",
        hostname: "ac1a8b53019ffc552a431e9520a9fa2e.r2.cloudflarestorage.com",
      },
    ],
  },
};

export default nextConfig;

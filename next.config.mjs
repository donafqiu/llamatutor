/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        hostname: "www.google.com",
      },
    ],
  },
};

export default nextConfig;

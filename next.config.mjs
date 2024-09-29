/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org", pathname: "**" },
    ],
  },
  base:"/google-next/"
};

export default nextConfig;

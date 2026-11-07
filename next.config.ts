import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      {
        source: "/small-apartment-storage/vacuum",
        destination: "/learn/vacuum-storage-in-a-small-apartment",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

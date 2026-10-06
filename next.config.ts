import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/",
        permanent: true,
      },
      {
        source: "/addons",
        destination: "/add-ons",
        permanent: true,
      },
      {
        source: "/clark-nj-smoke-smell-removal",
        destination: "/car-odor-treatment",
        permanent: true,
      },
      {
        source: "/basking-ridge-nj-odor-removal-service",
        destination: "/car-odor-treatment",
        permanent: true,
      },
      {
        source: "/bernardsville-nj-odor-removal-services",
        destination: "/car-odor-treatment",
        permanent: true,
      },
      {
        source: "/bedminster-nj-odor-removal",
        destination: "/car-odor-treatment",
        permanent: true,
      },
      {
        source: "/far-hills-ozone-treatment",
        destination: "/car-odor-treatment",
        permanent: true,
      },
      {
        source: "/booking",
        destination: "https://cleanworx-llc.square.site/",
        permanent: false,
      },
      {
        source: "/sitemap",
        destination: "/sitemap.xml",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

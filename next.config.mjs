const nextConfig = {
  output: "standalone",
  async redirects() {
    return [
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

import { legacyRedirects } from "./legacy-redirects.mjs";

const nextConfig = {
  output: "standalone",
  async redirects() {
    return [
      ...legacyRedirects,
      {
        source: "/addons",
        destination: "/add-ons",
        statusCode: 301,
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

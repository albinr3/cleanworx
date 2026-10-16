import { legacyRedirects } from "./legacy-redirects.mjs";

const nextConfig = {
  output: "standalone",
  async headers() {
    const immutableMediaHeaders = [
      {
        key: "Cache-Control",
        value: "public, max-age=31536000, immutable",
      },
    ];

    return [
      {
        source: "/images/autodetail/hero-video.mobile.v1.mp4",
        headers: immutableMediaHeaders,
      },
      {
        source: "/images/autodetail/hero-video.mobile.v1-poster.webp",
        headers: immutableMediaHeaders,
      },
      {
        source: "/images/autodetail/showroom-detail.mobile.v1-poster.webp",
        headers: immutableMediaHeaders,
      },
      {
        source: "/videos/showroom-detail.mobile.v1.mp4",
        headers: immutableMediaHeaders,
      },
    ];
  },
  async redirects() {
    return [
      ...legacyRedirects,
      {
        source: "/addons",
        destination: "https://www.cleanworxnj.com/add-ons",
        statusCode: 301,
      },
      {
        source: "/booking",
        destination: "https://cleanworx-llc.square.site/",
        permanent: false,
      },
      {
        source: "/sitemap",
        destination: "https://www.cleanworxnj.com/sitemap.xml",
        statusCode: 301,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "cleanworxnj.com",
          },
        ],
        destination: "https://www.cleanworxnj.com/:path*",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;

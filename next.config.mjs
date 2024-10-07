/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
  images: {
    domains: ['example.com'],
  },
  env: {
    CUSTOM_KEY: 'my-value',
  },
  i18n: {
    locales: ['en-US', 'fr', 'nl'],
    defaultLocale: 'en-US',
  },
  webpack(config, { isServer }) {
    // Further custom configuration here
    return config;
  },
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_IMG || "source.unsplash.com",
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    HOST_NAME: 'https://pasar-pagi.shop',
  },
}

module.exports = nextConfig

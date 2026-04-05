import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  transpilePackages: ['@telugu/ui', '@telugu/srs', '@telugu/telugu-nlp', '@telugu/media-ingest']
};

export default nextConfig;

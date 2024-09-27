import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export'
//   basePath: '/Portfolio',
//   assetPrefix: '/Portfolio/',
//   images: {
//     unoptimized: true,
//   },
};

// Check if Sentry should be enabled
const isSentryEnabled = process.env.USE_SENTRY === 'true';

const finalConfig = isSentryEnabled
  ? withSentryConfig(nextConfig, {
      org: "farwees",
      project: "javascript-nextjs",
      silent: !process.env.CI,
      widenClientFileUpload: true,
      reactComponentAnnotation: { enabled: true },
      tunnelRoute: "/monitoring",
      hideSourceMaps: true,
      disableLogger: true,
      automaticVercelMonitors: true,
    })
  : nextConfig;

export default finalConfig;
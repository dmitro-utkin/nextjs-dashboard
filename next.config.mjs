// @ts-check

/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    typedRoutes: true,
    ppr: "incremental",
  },
  sassOptions: {
    implementation: "sass-embedded",
  },
};

export default nextConfig;

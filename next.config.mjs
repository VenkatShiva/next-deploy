/** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV === "production";

const isProd =  true;

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: isProd ? "/next-deploy" : "",
  trailingSlash: true,
  assetPrefix: isProd ? "/next-deploy/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
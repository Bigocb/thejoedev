import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true, transpilePackages: ["lucide-react"],
};



export default withContentlayer(nextConfig);

/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = __filename.substring(0, __filename.lastIndexOf('\\'));

const nextConfig = {
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

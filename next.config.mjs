/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'flowbite.s3.amazonaws.com',
              port: '',
              pathname: '/docs/**',
              search: '',
            },
          ],
        },};
        
export default nextConfig;

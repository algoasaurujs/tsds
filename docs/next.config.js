/** @type {import('next').NextConfig} */
const nextConfig = {
  // exportPathMap: function () {
  //   return {
  //     "/": { page: "/" },
  //     // "/about": { page: "/about" },
  //   }
  // },
  images: {
    loader: 'akamai',
    path: '',
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "automationalien.s3.us-east-1.amazonaws.com",
      "n8n.io",
      "zapier.com",
      "www.make.com"
    ],
  },
};

module.exports = nextConfig; 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
         remotePatterns:[
            {
                protocol: 'https',
                hostname:"images.pexels.com"
            },
            {
                protocol: 'https',
                hostname:"s.alicdn.com"
            },
            {
                protocol:"https",
                hostname:"cdn3.yoox.biz"
            }
         ]
    }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|webp|avif|gif)$/i,
      use: {
        loader: '@svgr/webpack',
        options: {
          preload: true
        }
      }
    })
    
    return config
  }
}

module.exports = nextConfig

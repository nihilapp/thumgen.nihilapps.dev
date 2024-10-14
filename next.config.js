/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  distDir: 'build',
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  // 정적 페이지의 결과물이 이 폴더에 생긴다.
  // basePath: '',
  // 결과물의 기본 경로를 설정한다.
  eslint: {
    dirs: [],
  },
  webpack(config) {
    config.cache = false;
    config.module.rules.push({
      test: /\.svg$/,
      use: [ '@svgr/webpack', ],
    });
    return config;
  },
};

module.exports = nextConfig;

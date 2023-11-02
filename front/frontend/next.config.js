//next.connfig.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/fonts/',
          },
        },
      ],
    })

    return config
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://192.168.30.130:9000/api/:path*',
      },
    ]
  },
}

module.exports = { ...nextConfig }

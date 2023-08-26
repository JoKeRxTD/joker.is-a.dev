/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/JoKeRxTD',
        permanent: true
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/jokerxtd',
        permanent: true
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/6mXqkFw',
        permanent: true
      },
      {
        source: '/myapi',
        destination: 'https://api.jokerxtd.xyz',
        permanent: true
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/home',
        destination: '/'
      }
    ]
  }
}

const withPlugins = require('next-compose-plugins')
const withPreact = require('next-plugin-preact')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {}

module.exports = withPlugins([withBundleAnalyzer, withPreact], nextConfig)

/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const withOffline = require('next-offline')

module.exports = {
  reactStrictMode: true,
  withPWA,
  withOffline,
}

const path = require('path')

module.exports = {
  webpack: {
    aliass: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}
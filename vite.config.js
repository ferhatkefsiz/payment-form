// vite.config.js
const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'frontend/html/index.html'),
        nested: resolve(__dirname, 'frontend/html/paymentform.html')
      }
    }
  }
}

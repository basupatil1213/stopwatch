// webpack.config.js

module.exports = {
    // other webpack configuration
    resolve: {
      fallback: {
        "vm": false // Use an empty module for 'vm'
      }
    }
  };
  
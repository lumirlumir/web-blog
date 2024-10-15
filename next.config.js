const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'src', 'styles')],
    additionalData: `
      @import 'mixins';
    `,
  },
  // Remove `console.*` output except `console.error`
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
};

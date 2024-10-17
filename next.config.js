const path = require('path');

module.exports = {
  images: {
    domains: ['avatars.githubusercontent.com'], // Allow GitHub profile image.
  },
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'src', 'styles')],
    additionalData: `
      @import 'utils/mixins';
      @import 'utils/variables';
    `,
  },
  // Remove `console.*` output except `console.error`
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
};

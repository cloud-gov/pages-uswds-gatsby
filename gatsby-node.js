const path = require('path');

const uswdsRoot = 'node_modules/uswds';

module.exports = {
  onCreateWebpackConfig: ({ stage, actions }) => {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          uswds_components: path.resolve(
            __dirname,
            uswdsRoot,
            'src/js/components'
          ),
          uswds_images: path.resolve(__dirname, uswdsRoot, 'dist/img'),
          uswds_polyfills: path.resolve(
            __dirname,
            uswdsRoot,
            'src/js/polyfills'
          ),
          'uswds-react': path.resolve(__dirname, 'src/lib'),
        },
      },
    });
  },
};

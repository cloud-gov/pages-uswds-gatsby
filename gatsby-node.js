const path = require('path');
const webpack = require('webpack');

const uswdsRoot = 'node_modules/uswds';
const shims = 'shims';

module.exports = {
  onCreateWebpackConfig: ({ stage, actions }) => {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          // Until uswds exports the components individually
          uswds_components: path.resolve(
            __dirname,
            uswdsRoot,
            'src/js/components'
          ),
          uswds_images: path.resolve(__dirname, uswdsRoot, 'dist/img'),
          // Until uswds exports the polyfills individually, though this doesn't totally fix things
          // because some polyfills are included no matter what, see below
          uswds_polyfills: path.resolve(
            __dirname,
            uswdsRoot,
            'src/js/polyfills'
          ),
          // until the `uswds-react` library is created, just a helper for now
          'uswds-react': path.resolve(__dirname, 'src/lib'),
          /**
           * Reroute and shim some polyfills to be able to statically render
           ****
           */
          'element-closest': path.resolve(__dirname, shims, 'element-closest'),
          'element-closest-orig': path.resolve(
            __dirname,
            'node_modules/element-closest'
          ),
          'elem-dataset': path.resolve(__dirname, shims, 'elem-dataset'),
          'elem-dataset-orig': path.resolve(
            __dirname,
            'node_modules/elem-dataset'
          ),
        },
      },
    });
  },
  onClientEntry: () => {
    try {
      require('uswds_polyfills');
    } catch (e) {
      // do nothing
    }
  },
};



module.exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate  = path.join(__dirname, `src`, `templates/blogTemplate.js`)

  return graphql(`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ){
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }
  `).then(result => {
    if (result.errors ) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {} // addl data can be passed via context
      })
    })
  })
};
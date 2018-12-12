module.exports = {
  siteMetadata: {
    title: `Federalist | Gatsby | USWDS`,
  },
  // Note: it must *not* have a trailing slash.
  pathPrefix: `/site/18f/federalist-gatsby-uswds-template`,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
        name: 'src',
      },
    },
    `gatsby-transformer-yaml`,
  ],
};

module.exports = {
  siteMetadata: {
    title: `Federalist | Gatsby | USWDS`,
    header: {
      secondaryLinks: [
        { text: 'Secondary link', link: '/' },
        { text: 'Another secondary link', link: '/' },
      ],
      navigation: [
        {
          title: 'Current Section',
          items: [
            { text: 'Navigation link', link: '/' },
            { text: 'Navigation link', link: '/' },
            { text: 'Navigation link', link: '/' },
          ],
        },
        {
          title: 'Section',
          items: [
            { text: 'Navigation link', link: '/' },
            { text: 'Navigation link', link: '/' },
            { text: 'Navigation link', link: '/' },
          ],
        },
        {
          items: [{ text: 'Simple link', link: '/' }],
        },
      ],
    },
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

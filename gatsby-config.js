const path = require('path');

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
          items: [{ text: 'Agency Spending', link: '/spending' }],
        },
      ],
    },
  },
  // Note: it must *not* have a trailing slash.
  pathPrefix: process.env.BASEURL || '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `markdown`),
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: path.join(__dirname, `src`, `data`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-source-usa-spending-toptier-agencies`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};

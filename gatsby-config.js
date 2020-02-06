module.exports = {
  siteMetadata: {
    author: 'Foo',
    title: `Agency Name`,
    description: `Agency Name (EAC) Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Aenean et sapien a leo auctor scelerisque quis nec magna. Sed dictum ante a risus vehicula facilisis.`,
    navigation: [
      {
        items: [{ text: 'Home', link: '/' }],
      },
      {
        items: [{ text: 'Blog', link: '/blog' }],
      },
      {
        items: [{ text: 'Document', link: '/document' }],
      },
      {
        items: [
          { text: 'Document with sidenav', link: '/document-with-sidenav' },
        ],
      },
      {
        title: 'Document submenu',
        items: [
          { text: 'Navigation link', link: '/' },
          { text: 'Navigation link', link: '/' },
          { text: 'Navigation link', link: '/' },
        ],
      },
    ],
    secondaryLinks: [
      { text: 'Secondary link', link: '/' },
      { text: 'Another secondary link', link: '/' },
    ],

    // Search.gov configuration
    //
    // 1. Create an account with Search.gov https://search.usa.gov/signup
    // 2. Add a new site.
    // 3. Add your site/affiliate name here.
    searchgov: {
      endpoint: 'https://search.usa.gov', // You should not change this.
      affiliate: 'federalist-uswds-example', // replace this with your search.gov account
      access_key: 'xX1gtb2RcnLbIYkHAcB6IaTRr4ZfN-p16ofcyUebeko=', // This is placeholder. Not private.
      inline: true, // this renders the results on the same domain. Otherwise, it will render the results in the search.gov domain
    },
    dapAgency: 'GSA',
  },
  pathPrefix: process.env.BASEURL || '/',
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/src/blog-posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documentation-pages`,
        path: `${__dirname}/src/documentation-pages`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/federalist-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

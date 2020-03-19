# Federalist + U.S. Web Design System + Gatsby

This site is developed using the [U.S. Web Design System v 2.0](https://v2.designsystem.digital.gov) and is focused on providing developers a starter kit and reference implementation for Federalist websites.

This code uses the [Gatsby](https://www.gatsbyjs.org/) framework and built with Javascript and [React](https://reactjs.org/). If you prefer to use Ruby, check out [federalist-uswds-jekyll](https://github.com/18F/federalist-uswds-jekyll), which uses [Jekyll](https://jekyllrb.com) site engine.

This project assumes that you are comfortable editing source code. If you prefer to launch a website without editing any source code, checkout [uswds-jekyll](https://github.com/18F/uswds-jekyll), which allows you to change the layout and content with configuration files.

This project strives to be compliant with requirements set by [21st Century IDEA Act](https://www.meritalk.com/articles/senate-passes-idea-act/). The standards require that a website or digital service:

- is accessible to individuals with disabilities;
- has a consistent appearance;
- does not duplicate any legacy websites (the legislation also requires agencies to ensure that legacy websites are regularly reviewed, removed, and consolidated);
- has a search function;
- uses an industry standard secure connection;
- “is designed around user needs with data-driven analysis influencing management and development decisions, using qualitative and quantitative data to determine user goals, needs, and behaviors, and continually test the website, web-based form, web-based application, or digital service to ensure that user needs are addressed;”
- allows for user customization; and
- is mobile-friendly.

## 🖐Previous Versions 🖐

If you're looking for the original starter that included a more integrated approach to using USWDS with React, it is still available [here](https://github.com/18F/federalist-uswds-gatsby/tree/v1), but will not be maintained.

## Features

✅ [USWDS v2](https://v2.designsystem.digital.gov) javascript, styles, images, and fonts are included by default. Styles can be customized with either SASS or CSS in `src/styles/index.scss`.

✅ Publish blog posts using Markdown. Any markdown files in the `src/blog-posts` directory will be turned into pages at `/blog/<path>` in the application using the `src/templates/blog-post.js` template, where `<path>` is specified in the frontmatter of the file. An index of all posts will be displayed at `/blog` using the `src/templates/blog.js` template.

✅ Publish documentation pages using Markdown. Any markdown files in the `src/documentation-pages` directory will be turned into pages at `/<path>` in the application using the `src/templates/documentation-page.js` template, where `<path>` is specified in the frontmatter of the file. Side navigation for documentation pages can be controlled by setting `sidenav: true` or `sidenav: false` to your page front matter.

✅ Publish custom pages using React. Any javascript files in the `src/pages` directory will be turned into pages at `/<filename>.html`, where `<filename>` is the actualy name of the file.

✅ Customize SEO information for each page by adding the `src/components/seo.js` component to any page or template and providing the desired information. Ex. [Home page](https://github.com/18F/federalist-uswds-gatsby/blob/master/src/pages/index.js#L11).

✅ [Search.gov](https://search.gov) integration - Once you have registered and configured Search.gov for your site by following [these instructions](https://federalist.18f.gov/documentation/search/), add your "affiliate" and "access key" to `gatsby-config.js`. Ex.

```
searchgov: {
  endpoint: 'https://search.usa.gov', // You should not change this.
  affiliate: 'federalist-uswds-example', // replace this with your search.gov account
  access_key: 'xX1gtb2RcnLbIYkHAcB6IaTRr4ZfN-p16ofcyUebeko=', // This is placeholder. Not private.
  inline: true, // this renders the results on the same domain. Otherwise, it will render the results in the search.gov domain
}
```

The logic for using Search.gov can be found in the `src/components/search-form.js` component and supports displaying the results inline or sending the user to Search.gov the view the results. This setting defaults to "inline" but can be changed by setting `searchgov: { inline: false }` in `gatsby-config.js`.

✅ [Digital Analytics Program (DAP)](https://digital.gov/services/dap/) integration - Once you have registered your site with DAP add your "agency" to the `dapAgency` key in `gatsby-config.js`. Ex.

```
dapAgency: 'GSA',
```

✅ Out-of-the-box performant caching strategy following [Gatsby recommended practices](https://www.gatsbyjs.org/docs/caching/) via `federalist.json`. See [Federalist Documentation](https://federalist.18f.gov/documentation/) for more information on `federalist.json`.

## Getting Started

### Installation as a starter

#### With `npx`

The simplest way to create your own repository based on this starter is to use `npx` (included with `node`) with `degit`.

    $ npx degit https://github.com/18F/federalist-uswds-gatsby <destination-folder>
    $ cd <destination-folder>
    $ git init

#### With `git`

    $ git clone --depth 1 https://github.com/18F/federalist-uswds-gatsby <destination-folder>
    $ cd <destination-folder>
    $ npm run reset
    $ git init

### Installation for development

    $ git clone https://github.com/18F/federalist-uswds-gatsby
    $ cd federalist-uswds-gatsby

### Install dependencies and run app

    $ npm install
    $ npm run develop

Open your web browser to [localhost:8000](http://localhost:8000/) to view your
site.

_Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

Note that when built by Federalist, `npm run federalist` is used instead of the
`build` script.

## Technologies you should be familiarize yourself with

- [Gatsby](https://www.gatsbyjs.org/) - The framework that does all the magic
- [React](https://reactjs.org/) - The view library
- [GraphQL](https://graphql.org/) - The data layer used by Gatsby
- [node](https://nodejs.org/en/) - Javascript runtime
- [npm](https://www.npmjs.com/) - Javascript dependency manager
- [U.S. Web Design System v 2.0](https://v2.designsystem.digital.gov)

### 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## Things to Note

- The Federalist script runs the Gatsby build with the `--prefix-paths` flag. This is necessary to make sure all internal internal links point to the correct path for preview deployments.
- Always use the `Link` component provided by Gatsby for internal links, see previous note.
- Importing USWDS images can be done straight from their local location in `node_modules`. See [Banner.js](https://github.com/18F/federalist-uswds-gatsby/blob/master/src/components/banner.js) for an example.
- This is built from the default [Gatsby default starter](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-default/), you can view the documentation there to see more of what is included.

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for additional information.

## Public domain

This project is in the worldwide [public domain](LICENSE). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright
> and related rights in the work worldwide are waived through the [CC0 1.0
> Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication.
> By submitting a pull request, you are agreeing to comply with this waiver of
> copyright interest.

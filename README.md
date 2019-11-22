# Federalist template using Gatsby and USWDS 2.0

This is a working example of deploying a [Gatsby](https://www.gatsbyjs.org/) and [US Web Design System v2.0](https://v2.designsystem.digital.gov/) static site with [Federalist](https://federalist.18f.gov/). It should be considered **experimental and a work in progress**.

## See It Live

[Click Me](https://federalist-proxy.app.cloud.gov/site/18f/federalist-uswds-gatsby/)

## Local Development

Local development is no different than any other Gatsby application. Node v8.x or 10.x is recommended.

- `git clone git@github.com:18F/federalist-gatsby-uswds-template.git`
- `npm install`
- `npm run develop` and the site will be viewable at localhost:8000
- `npm run build` builds the static site and assets in the `public/` directory
- `npm run serve` serves the built static files at `http://localhost:9000`
- `npm run clean` removes the built static file directories `.cache/` and `public/`

## Why

Federalist supports sites generated using `node` but the documentation, examples, and experience of most users involve using [Jekyll](https://jekyllrb.com/). Meanwhile, Gatsby is a great fit for many government static sites as it allows for disparate data sources and uses React while the USWDS provides a wonderful foundation for building beautiful, 508-compliant sites. Currently, using USWDS with React takes a little bit of effort, so using them together here them demonstrates the possibility of doing so while acting as a testbed for future changes in USWDS to make this pairing easier in the future.

## Details

### Gatsby on Federalist

Federalist _can_ build any javascript application that generates a site, but there are a couple items to configure:

1. Federalist expects the output to be in a folder named `_site` but Gatsby's output is placed in `public` and probably won't ever be configurable ([Gatsby Issue](https://github.com/gatsbyjs/gatsby/issues/1878)). We address this in this repo by creating a symlink named `_site` that points to `public`.
2. Federalist's preview builds and builds without a custom domain will be served at a nested path instead of at the root of a domain (ex. `/site/18f/<repo_name>`), causing internal, relative links to be incorrect. Gatsby provides the `Link` component to manage internal links but needs to know the actual root of the website to generate correct URLs. We address this by configuring the `prefixPath` in Gatsby by adding `pathPrefix: process.env.BASEURL || '/'` to [gatsby-config.js](https://github.com/18F/federalist-gatsby-uswds-template/blob/master/gatsby-config.js#L33) file in the root of the project and running the build in Federalist with the `--prefix-paths` option.
3. Like any `node` project on Federalist, this project must have a `federalist` key in the 'scripts' section of `package.json`, here we have `"federalist": "npm run build -- --prefix-paths"`.

### Gatsby Features Utilized

#### Display content from different data sources:

- [x] local yaml file [index.yml](https://github.com/18F/federalist-gatsby-uswds-template/blob/master/src/data/index.yml)
- [x] local Gatsby configuration [gatsby-config.js](https://github.com/18F/federalist-gatsby-uswds-template/blob/master/gatsby-config.js#L3)
- [ ] local markdown file
- [x] remote api (USASpending.gov)

#### Other

- [x] Use [Gatsby Image](https://www.gatsbyjs.org/packages/gatsby-image/) to display optimized images

### USWDS and Gatsby/React

The USWDS is geared toward being used in a drop-in/copy-paste fashion and the CSS works just fine in any scenario, but the JS that handles user interaction is not meant to be used alongside a library like React or in non-browser environments (Gatsby is server rendered). In time, some of these issues may become more tractable or disappear completely, but for now, to use the USWDS as-is in this application we:

1. Import the USWDS CSS in our [layout css](https://github.com/18F/federalist-gatsby-uswds-template/blob/master/src/components/layout.css#L1)
2. Only load the USWDS polyfills in the browser

   - [Webpack alias](https://github.com/18F/federalist-gatsby-uswds-template/blob/master/gatsby-node.js#L21)
   - [Only load in browser](https://github.com/18F/federalist-gatsby-uswds-template/blob/master/gatsby-node.js#L45)

3. Shim transient dependencies so they only load in the browser

   - [Shims](https://github.com/18F/federalist-gatsby-uswds-template/tree/master/shims)
   - [Webpack aliases](https://github.com/18F/federalist-gatsby-uswds-template/blob/master/gatsby-node.js#L31)

4. Create some helpful aliases

   - [Webpack alias for images](https://github.com/18F/federalist-gatsby-uswds-template/blob/master/gatsby-node.js#L18)
   - [Webpack alias for js components](https://github.com/18F/federalist-gatsby-uswds-template/blob/master/gatsby-node.js#L13)

5. Create a generic React component to manage lifecycle for USWDS javascript

   - [UswdsComponent](https://github.com/18F/federalist-gatsby-uswds-template/blob/master/src/lib/uswds_component.js)

## License

### Public domain

This project is in the worldwide [public domain](LICENSE). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.

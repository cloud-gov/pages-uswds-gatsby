/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import './src/styles/index.scss';
import 'uswds';

import { siteMetadata } from './gatsby-config';

let loaded = false;

const dap = pathname => {
  window.gas && window.gas('send', 'pageview', pathname);
};

export const onInitialClientRender = () => {
  const script = document.createElement('script');
  script.src = `https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=${siteMetadata.dapAgency}`;
  script.id = '_fed_an_ua_tag';
  script.onload = () => {
    dap(window.location.pathname);
    loaded = true;
  };

  document.body.appendChild(script);
};

export const onRouteUpdate = ({ location }) => {
  loaded && dap(location.pathname);
};

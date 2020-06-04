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

const googleAnalytics = pathname => {
  window.ga && window.ga('send', 'pageview', pathname);
};

const loadScript = (src, onLoad, attrs = {}) => new Promise(resolve => {
  const script = document.createElement('script');
  script.src = src;
  Object.assign(script, attrs);
  script.onload = () => {
    onLoad();
    resolve();
  };
  document.body.appendChild(script);
});

export const onInitialClientRender = () => {
  const scripts = [];

  if (siteMetadata.dapAgency) {
    let src = `https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=${siteMetadata.dapAgency}`;
    if (siteMetadata.dapSubAgency) {
      src += `&subagency=${siteMetadata.dapSubAgency}`
    }
    const onLoad = () => dap(window.location.pathname);
    scripts.push(loadScript(src, onLoad, { id: '_fed_an_ua_tag'}));
  }

  if (siteMetadata.googleAnalyticsUA) {
    const src = `https://www.googletagmanager.com/gtag/js?id=${siteMetadata.googleAnalyticsUA}`
    const onLoad = () => googleAnalytics(window.location.pathname);
    scripts.push(loadScript(src, onLoad));

    // `forceSSL` was used for analytics.js (the older Google Analytics script).
    // It isn't documented for gtag.js, but the term occurs in the gtag.js code;
    // figure it doesn't hurt to leave it in. -@afeld, 5/29/19
    const gtag = document.createElement('script');
    gtag.text = `
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', '${siteMetadata.googleAnalyticsUA}', { 'anonymize_ip': true, 'forceSSL': true });
    `;
    document.body.appendChild(gtag);
  }

  Promise.all(scripts)
    .then(() => { loaded = true });
};

export const onRouteUpdate = ({ location }) => {
  if (loaded) {
    dap(location.pathname);
    googleAnalytics(location.pathname);
  }
};

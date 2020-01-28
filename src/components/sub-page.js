import React from 'react';
import Layout from '../components/layout';

const subPage = ({ children }) => {
return (
  <Layout>
    <div className="usa-layout-docs usa-section">
      <div className="grid-container">
        <div className="usa-layout-docs-main_content desktop:grid-col-9 usa-prose">
          {children}
        </div>
      </div>
    </div>
  </Layout>
);
};

export default subPage;

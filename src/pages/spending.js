import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

const currencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const formatCurrency = number => {
  const oneBillion = 1000000000;
  const inBillions = Math.round(number / oneBillion);
  // Not sure why maximumFractionDigits doesn't like a value of 0
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
  //eslint-disable-next-line no-unused-vars
  const [integerOnly, _] = currencyFormat.format(inBillions).split('.');
  return integerOnly;
};

const Spending = ({ data, location }) => {
  const agencies = data.allUsaSpendingToptierAgencies.edges.map(
    ({ node }) => node
  );

  return (
    <Layout>
      <div className="usa-layout-docs usa-section">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            <aside className="usa-layout-docs-sidenav desktop:grid-col-3">
              <nav>
                <ul className="usa-sidenav">
                  <li className="usa-sidenav__item">
                    <Link to="spending" activeClassName="usa-current">
                      Agencies
                    </Link>
                    <ul className="usa-sidenav__sublist">
                      {agencies.map((agency, idx) => (
                        <li key={idx} className="usa-sidenav__item">
                          <Link
                            to={`spending#agency-${agency.agency_id}`}
                            className={
                              location.hash === `#agency-${agency.agency_id}`
                                ? 'usa-current'
                                : ''
                            }
                          >
                            {agency.agency_name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </nav>
            </aside>

            <div className="usa-layout-docs-main_content desktop:grid-col-9 usa-prose">
              <h1>Agencies</h1>

              <p className="usa-font-lead">
                The 5 top-tier agencies with the largest budgets. Data from
                <a href="https://api.usaspending.gov/"> USASpending.gov</a>.
                <strong className="font-serif-2xs">
                  {' '}
                  (All data in Billions)
                </strong>
              </p>

              {agencies.map((agency, idx) => (
                <section key={idx} id={`agency-${agency.agency_id}`}>
                  <h3
                    id="section-heading-h2"
                    className="spending-agency__header"
                  >
                    {agency.agency_name}
                  </h3>
                  <p className="text-right spending-agency__p">
                    <span className="text-base spending-agency__amount">
                      {formatCurrency(agency.budget_authority_amount)}
                    </span>
                  </p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query SpendingQuery {
    allUsaSpendingToptierAgencies(limit: 5) {
      edges {
        node {
          agency_name
          agency_id
          budget_authority_amount
        }
      }
    }
  }
`;

export default Spending;

const fetch = require('node-fetch');

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions;

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins;

  const apiUrl =
    'https://api.usaspending.gov/api/v2/references/toptier_agencies/?sort=budget_authority_amount&order=desc';

  const processData = data => {
    const nodeId = createNodeId(
      `usa-spending-toptier_agencies-${data.agency_id}`
    );
    const nodeContent = JSON.stringify(data);
    const nodeData = Object.assign({}, data, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `UsaSpendingToptierAgencies`,
        content: nodeContent,
        contentDigest: createContentDigest(data),
      },
    });

    return nodeData;
  };

  return fetch(apiUrl)
    .then(response => response.json())
    .then(({ results }) => {
      results.forEach(result => createNode(processData(result)));
    });
};

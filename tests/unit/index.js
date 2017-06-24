// require all `project/test/src/components/**/index.js`
const testsContext = require.context('./specs/', true, /\/*spec.js$/);
testsContext.keys().forEach(testsContext);

// require all `project/src//**/index.js`
const componentsContext = require.context('../../src/', true, /\.js$/);
componentsContext.keys().forEach(componentsContext);

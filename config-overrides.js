const { override, useBabelRc } = require('customize-cra');

module.exports = override(
    // Override webpack config here...
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(),
);

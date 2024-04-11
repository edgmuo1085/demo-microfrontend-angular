const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  remotes: {
    mfShopping: 'http://angular-two.local/remoteEntry.js', //shopping
    mfPayment: 'http://angular-three.local/remoteEntry.js', //payment
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
  sharedMappings: ['@commons-lib'],
});

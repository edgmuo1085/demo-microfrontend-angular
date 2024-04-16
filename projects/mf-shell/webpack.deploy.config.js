const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  remotes: {
    /* mfShopping: 'http://shopping.local/remoteEntry.js', //shopping
        mfPayment: 'http://payment.local/remoteEntry.js', //payment */
    mfShopping: 'http://localhost:4201/remoteEntry.js', //shopping
    mfPayment: 'http://localhost:4202/remoteEntry.js', //payment
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
  sharedMappings: ['@commons-lib'],
});

const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  remotes: {
    mfe1: 'mfe1@http://localhost:2000/remoteEntry.js',
    mfe2: 'mfe2@http://localhost:3000/remoteEntry.js',
  },
  shared: {
    '@angular/core': { singleton: true, strictVersion: true, requiredVersion: '16.2.12' },
    '@angular/common': { singleton: true, strictVersion: true, requiredVersion: '16.2.12' },
    '@angular/router': { singleton: true, strictVersion: true, requiredVersion: '16.2.12' },
  },
  
  
});

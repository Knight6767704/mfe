const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'mfe2',
  filename: 'remoteEntry.js',
  exposes: {
    './Component': './projects/mfe2/src/app/app.component.ts',
  },
  
  shared: {
    '@angular/core': { singleton: true, strictVersion: true, requiredVersion: '16.2.12' },
    '@angular/common': { singleton: true, strictVersion: true, requiredVersion: '16.2.12' },
    '@angular/router': { singleton: true, strictVersion: true, requiredVersion: '16.2.12' },
  },
  
  
});

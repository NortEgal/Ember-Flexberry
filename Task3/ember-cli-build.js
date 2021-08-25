"use strict";

const EmberApp = require("ember-cli/lib/broccoli/ember-app");
const funnel = require('broccoli-funnel');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    'ember-bootstrap': {
      'bootstrapVersion': 4,
      'importBootstrapCSS': false
    }
  });

  app.import('vendor/tagsinput.css');

  const jsFiles = funnel('vendor', {
    files: ['popper.min.js', 'bootstrap-file.js', 'tagsinput.js'],
    destDir: 'js'
  });

  return app.toTree(jsFiles);
};

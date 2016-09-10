// See http://brunch.io for documentation.
module.exports = {
  files: {
    javascripts: {
      joinTo: {
        // user scripts go in app/scripts/
        'app.js': 'app/scripts/*.js',
        // third-party globals go here. You can also require
        'vendor.js': 'app/scripts/vendor/*.js|node_modules/**|bower_components/**'
      },
      order: {
        // Specify order only if necessary. Otherwise brunch will load vendor,
        // then app.js, in that order
        before: ['app/scripts/vendor/jquery.min.js']
      }
    },
    stylesheets: {
      joinTo: {
        'vendor.css': 'app/styles/vendor/*.css|bower_components/**',
        'app.css': 'app/styles/*.css'
      }
    },
    templates: {
      joinTo: 'app.js'
    }
  }
};

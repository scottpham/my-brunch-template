// See http://brunch.io for documentation.
module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'app.js': 'app/scripts/*.js',
        'vendor.js': 'app/scripts/vendor/*.js'
      },
      order: {
        before: ['app/scripts/vendor/jquery.min.js']
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    },
    templates: {
      joinTo: 'app.js'
    }
  }
};

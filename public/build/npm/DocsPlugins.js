'use strict'

const Plugins = [
  // AdminLTE Dist
  {
    from: 'dist/css/',
    to: 'docsassets/css/'
  },
  {
    from: 'dist/js/',
    to: 'docsassets/js/'
  },
  // jQuery
  {
    from: 'node_modules/jquery/dist/',
    to: 'docsassets/plugins/jquery/'
  },
  // Popper
  {
    from: 'node_modules/popper.js/dist/',
    to: 'docsassets/plugins/popper/'
  },
  // Bootstrap
  {
    from: 'node_modules/bootstrap/dist/js/',
    to: 'docsassets/plugins/bootstrap/js/'
  },
  // Font Awesome
  {
    from: 'node_modules/@fortawesome/fontawesome-free/css/',
    to: 'docsassets/plugins/fontawesome-free/css/'
  },
  {
    from: 'node_modules/@fortawesome/fontawesome-free/webfonts/',
    to: 'docsassets/plugins/fontawesome-free/webfonts/'
  },
  // overlayScrollbars
  {
    from: 'node_modules/overlayscrollbars/js/',
    to: 'docsassets/plugins/overlayScrollbars/js/'
  },
  {
    from: 'node_modules/overlayscrollbars/css/',
    to: 'docsassets/plugins/overlayScrollbars/css/'
  }
]

module.exports = Plugins

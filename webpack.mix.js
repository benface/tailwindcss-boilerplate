const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const glob = require('glob-all');
const path = require('path');
require('laravel-mix-purgecss');

mix.setPublicPath('public')
  .js('src/js/app.js', 'public/js')
  .extract();

if (process.env.MIX_JS_ONLY !== 'true') {
  mix.sass('src/css/app.scss', 'public/css')
    .options({
      processCssUrls: false,
      postCss: [
        tailwindcss('src/css/tailwind.js'),
      ],
    })
    .purgeCss({
      paths: () => glob.sync([
        path.join(__dirname, 'public/*.html'),
        path.join(__dirname, 'src/js/**/*.js'),
      ]),
      extensions: ['html', 'js', 'vue'],
    });
}

/*
mix.styles([
  'node_modules/flickity/css/flickity.css',
], 'public/css/vendor.css');
*/

mix.version([
  'public/images/**/*',
  'public/apple-touch-icon.png',
  'public/favicon.png',
]);

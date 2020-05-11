const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.setPublicPath('public')
  .js('src/js/app.js', 'public/js')
  .extract();

if (process.env.MIX_JS_ONLY !== 'true') {
  mix.sass('src/css/app.scss', 'public/css')
    .options({
      processCssUrls: false,
      postCss: [
        tailwindcss,
      ],
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

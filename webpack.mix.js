const mix = require('laravel-mix');
const path = require('path');
require('laravel-mix-react-css-modules');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/index.js', 'public/js')
    .webpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, 'resources/assets/js/modules'), 'node_modules']
        }
    })
   // .sass('resources/sass/app.scss', 'public/css')
    .reactCSSModules();

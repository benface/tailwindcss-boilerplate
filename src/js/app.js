// ------------------------------- IMPORTS ------------------------------- //

const $ = require('jquery');
const inlineSvgs = require('./modules/inline-svgs.js');


// ------------------------- MAKE JQUERY GLOBAL ------------------------- //

window.$ = $;
window.jQuery = $;


// ----------------------------- INLINE SVGs ----------------------------- //

inlineSvgs($('body'));

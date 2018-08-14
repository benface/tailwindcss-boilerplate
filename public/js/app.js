webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(4);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// ------------------------------- IMPORTS ------------------------------- //

var $ = __webpack_require__(0);
var inlineSvgs = __webpack_require__(3);

// ------------------------- MAKE JQUERY GLOBAL ------------------------- //

window.$ = $;
window.jQuery = $;

// ----------------------------- INLINE SVGs ----------------------------- //

inlineSvgs($('body'));

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);

module.exports = function ($context) {
  $context.find('img.c-svg').each(function () {
    var $img = $(this);
    var src = $img.attr('src');
    var id = $img.attr('id');
    var classes = $img.attr('class');
    var style = $img.attr('style');
    var width = $img.attr('width');
    var height = $img.attr('height');
    var alt = $img.attr('alt');

    $.ajax({
      method: 'get',
      url: src,
      dataType: 'xml'
    }).then(function (data) {
      var $svg = $(data).find('svg');
      if (id) {
        $svg.attr('id', id);
      }
      if (classes) {
        $svg.attr('class', classes);
      }
      if (style) {
        $svg.attr('style', style);
      }
      if (width) {
        $svg.attr('width', width);
      }
      if (height) {
        $svg.attr('height', height);
      }
      if (alt) {
        var $title = $svg.children().filter('title');
        if ($title.length > 0) {
          $title.html(alt);
        } else {
          $svg.prepend($('<title>' + alt + '</title>'));
        }
      }
      $img.replaceWith($svg);
    }).catch(function (e) {
      console.log(e);
    });
  });
  return $context;
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[1]);
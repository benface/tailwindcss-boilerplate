const $ = require('jquery');

module.exports = ($context) => {
  $context.find('img.c-svg').each(() => {
    const $img = $(this);
    const src = $img.attr('src');
    const id = $img.attr('id');
    const classes = $img.attr('class');
    const style = $img.attr('style');
    const width = $img.attr('width');
    const height = $img.attr('height');
    const alt = $img.attr('alt');

    $.ajax({
      method: 'get',
      url: src,
      dataType: 'xml',
    }).then((data) => {
      const $svg = $(data).find('svg');
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
        const $title = $svg.children().filter('title');
        if ($title.length > 0) {
          $title.html(alt);
        } else {
          $svg.prepend($(`<title>${alt}</title>`));
        }
      }
      $img.replaceWith($svg);
    }).catch((e) => {
      console.log(e);
    });
  });
  return $context;
};

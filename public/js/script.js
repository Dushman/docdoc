$(function() {
  $('ul[data-input=\"#filterSpec-input\"] > li').click(function(e) {
    var text;
    e.preventDefault();
    text = $(this).find('strong').text();
    $('.f-s a').html(text + '<span/><i/>');
    return $(this).parents('#select-specialist').find('.back-link').click();
  });
  return $('ul[data-input=\"#filterMetro-input\"] > li').click(function(e) {
    var text;
    e.preventDefault();
    text = $(this).find('strong').text();
    $('.f-m a').html(text + '<span/><i/>');
    return $(this).parents('#select-metro').find('.back-link').click();
  });
});

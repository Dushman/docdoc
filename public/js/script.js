$(function() {
  var verticalCenter;
  $('ul[data-input=\"#filterSpec-input\"] > li:not(".part")').click(function(e) {
    var text;
    e.preventDefault();
    $(this).addClass('selected').siblings().removeClass('selected');
    text = $(this).find('strong').text();
    $('.f-s > a').html(text + '<span/><i/>');
    return $(this).parents('#select-specialist').find('.back-link').click();
  });
  $('ul[data-input=\"#filterMetro-input\"] > li:not(".part")').click(function(e) {
    var text;
    e.preventDefault();
    $(this).addClass('selected').siblings().removeClass('selected');
    text = $(this).find('strong').text();
    $('.f-m > a').html(text + '<span/><i/>');
    return $(this).parents('#select-metro').find('.back-link').click();
  });
  verticalCenter = function() {
    var indexContent, indexTop, windowWidth;
    windowWidth = $(window).width();
    indexContent = $('.vertical-center');
    indexTop = indexContent.height() / 2 + 10;
    if (windowWidth >= 500) {
      return indexContent.css('margin-top', -indexTop + 'px');
    }
  };
  verticalCenter();
  return $(window).resize(function() {
    return verticalCenter();
  });
});

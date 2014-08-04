$(function() {
  $('ul[data-input=\"#filterSpec-input\"] > li:not(".ui-li-divider")').click(function(e) {
    var text;
    e.preventDefault();
    $(this).addClass('selected').siblings().removeClass('selected');
    text = $(this).find('strong').text();
    $('.f-s > a').html(text + '<span/><i/>');
    return $(this).parents('#select-specialist').find('.back-link').click();
  });
  $('ul[data-input=\"#filterMetro-input\"] > li:not(".ui-li-divider")').click(function(e) {
    var text;
    e.preventDefault();
    $(this).addClass('selected').siblings().removeClass('selected');
    text = $(this).find('strong').text();
    $('.f-m > a').html(text + '<span/><i/>');
    return $(this).parents('#select-metro').find('.back-link').click();
  });
  $('.form-item.item-3 a.textarea-spoiler').click(function(e) {
    e.preventDefault();
    $(this).parents('.form-item.item-3').next().slideDown().find('textarea').focus();
    return $(this).parents('.form-item.item-3').hide();
  });
  $('.rightPanel').on('panelbeforeopen', function(event, ui) {
    return $(this).parents('div[data-role=\"page\"]').find('.mask-overlay').css('display', 'block');
  });
  return $('.rightPanel').on('panelbeforeclose', function(event, ui) {
    return $(this).parents('div[data-role=\"page\"]').find('.mask-overlay').css('display', 'none');
  });
});

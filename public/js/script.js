$(function() {
  var hideHeader;
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
  $('.rightPanel').on('panelbeforeclose', function(event, ui) {
    return $(this).parents('div[data-role=\"page\"]').find('.mask-overlay').css('display', 'none');
  });
  $('#send-review .send-review-btn-block').on('click', function(e) {
    var form, link;
    link = $(this).find('a');
    form = $(this).parents('form');
    return $('.send-review-form .form-item .required').each(function() {
      if ($(this).val() === '') {
        return link.attr('href', '#review-error').click();
      } else {
        link.attr('href', '#review-success').click();
        return form.submit();
      }
    });
  });
  $('#doctor-form .send-button-wrap').on('click', function(e) {
    var form, link;
    link = $(this).find('a');
    form = $(this).parents('form');
    return $('.doctor-order-form .form-item .required').each(function() {
      if ($(this).val() === '') {
        return link.attr('href', '#order-error').click();
      } else {
        link.attr('href', '#order-success').click();
        return form.submit();
      }
    });
  });
  hideHeader = function() {
    if ($(window).height() < 700) {
      return $(document).on('scrollstart', function() {
        $('.hide-scroll').css('display', 'none');
        return $('#find-doctor div[data-role=\"header\"]').toolbar('updatePagePadding');
      }).on('scrollstop', function() {
        $('.hide-scroll').css('display', 'block');
        return $('#find-doctor div[data-role=\"header\"]').toolbar('updatePagePadding');
      });
    }
  };
  hideHeader();
  return $(window).on('resize', function() {
    return hideHeader();
  });
});

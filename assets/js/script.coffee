$ ->
    $('ul[data-input=\"#filterSpec-input\"] > li:not(".ui-li-divider")').click (e) ->
        e.preventDefault()
        $(this).addClass('selected').siblings().removeClass 'selected'
        text = $(this).find('strong').text()
        $('.f-s > a').html text + '<span/><i/>'
        $(this).parents('#select-specialist').find('.back-link').click()
    $('ul[data-input=\"#filterMetro-input\"] > li:not(".ui-li-divider")').click (e) ->
        e.preventDefault()
        $(this).addClass('selected').siblings().removeClass 'selected'
        text = $(this).find('strong').text()
        $('.f-m > a').html text + '<span/><i/>'
        $(this).parents('#select-metro').find('.back-link').click()
    $('.form-item.item-3 a.textarea-spoiler').click (e) ->
        e.preventDefault()
        $(this).parents('.form-item.item-3').next().slideDown().find('textarea').focus()
        $(this).parents('.form-item.item-3').hide()

    $("#rightPanel").on "panelbeforeopen", (event, ui) ->
        $(this).parents("div[data-role=\"page\"]").find(".mask-overlay").css "display", "block"

    $("#rightPanel").on "panelbeforeclose", (event, ui) ->
        $(this).parents("div[data-role=\"page\"]").find(".mask-overlay").css "display", "none"


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
    verticalCenter = ->
        windowWidth = $('#index-page').width()
        indexContent = $('.vertical-center')
        indexTop = indexContent.height() / 2 + 10
        indexContent.css 'margin-top', - indexTop + 'px'  if windowWidth >= 500
    verticalCenter()
    $(window).resize ->
        verticalCenter()
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

    $('.rightPanel').on 'panelbeforeopen', (event, ui) ->
        $(this).parents('div[data-role=\"page\"]').find('.mask-overlay').css 'display', 'block'

    $('.rightPanel').on 'panelbeforeclose', (event, ui) ->
        $(this).parents('div[data-role=\"page\"]').find('.mask-overlay').css 'display', 'none'

    $('#send-review .send-review-btn-block').on 'click', (e) ->
        link = $(this).find 'a'
        form = $(this).parents 'form'
        $('.send-review-form .form-item .required').each ->
            if $(this).val() is ''
                link.attr('href', '#review-error').click()
            else
                link.attr('href', '#review-success').click()
                form.submit()

    $('#doctor-form .send-button-wrap').on 'click', (e) ->
        link = $(this).find 'a'
        form = $(this).parents 'form'
        $('.doctor-order-form .form-item .required').each ->
            if $(this).val() is ''
                link.attr('href', '#order-error').click()
            else
                link.attr('href', '#order-success').click()
                form.submit()

    hideHeader = ->
        if $(window).height() < 700
            $(document).on('scrollstart', ->
              $('.hide-scroll').css 'display', 'none'
              $('#find-doctor div[data-role=\"header\"]').toolbar 'updatePagePadding'
            ).on 'scrollstop', ->
              $('.hide-scroll').css 'display', 'block'
              $('#find-doctor div[data-role=\"header\"]').toolbar 'updatePagePadding'

    hideHeader()

    $(window).on 'resize', () ->
        hideHeader()



    












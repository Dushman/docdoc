$ ->
  	$('ul[data-input=\"#filterSpec-input\"] > li').click (e) ->
    	e.preventDefault()
    	text = $(this).find('strong').text()
    	$('.f-s a').html(text + '<span/><i/>')
    	$(this).parents('#select-specialist').find('.back-link').click()

   	$('ul[data-input=\"#filterMetro-input\"] > li').click (e) ->
    	e.preventDefault()
    	text = $(this).find('strong').text()
    	$('.f-m a').html(text + '<span/><i/>')
    	$(this).parents('#select-metro').find('.back-link').click()


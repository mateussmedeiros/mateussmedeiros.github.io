// Abrir e Fechar - Menu
$(".bt-menu").click(function() {
	$(".menu").show();
	$(".wrapper").show();

	if ( $(".menu").is(":visible") ) {
		$(".bt-menu").attr('aria-expanded', 'true');
	};
});

$(".bt-close-menu").click(function() {
	$(".menu").hide();
	$(".wrapper").hide();

	if ( $(".menu").is(":hidden") ) {
		$(".bt-menu").attr('aria-expanded', 'false');
	}
});

$(window).resize(function() {
	var tamanhoViewport = $(window).width();
	if (tamanhoViewport > 800) {
		$(".wrapper").show();
	} else {
		$(".wrapper").hide();	
	}
});

// Abrir e Fechar - Barra de Pesquisa
$(".bt-search").click(function() {
	$("#search-container").show();

	if ( $("#search-container").is(":visible") ) {
		$(".bt-search").attr('aria-expanded', 'true');
	}
});

$(".bt-close").click(function() {
	$("#search-container").hide();

	if ( $("#search-container").is(":hidden") ) {
		$(".bt-search").attr('aria-expanded', 'false');
	}
});

// Simple Jekyll Search
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>',
  noResultsText: '<p>Sem resultados</p>'
})

$(window).resize(function(){
	if(window.innerWidth > 800) {
		$(".menu").removeAttr("style");
		$("#search-container").removeAttr("style");
	}
});
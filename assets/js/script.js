// Abrir e Fechar - Barra de Pesquisa
$(".bt-search").click(function() {
	$("#search-container").toggle();
});

// Simple Jekyll Search
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>',
  noResultsText: 'Sem resultados'
})

// Responsivo
$(".navigation").before("<a class='bt-menu'> ☰ Menu </a>");
$(".bt-menu").click(function() {
	$(".navigation").toggle();
	$("#search-container").toggle();
});

$(window).resize(function(){
	if(window.innerWidth > 800) {
		$(".navigation").removeAttr("style");
		$("#search-container").removeAttr("style");
	}
});
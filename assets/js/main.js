// ==========================================================================
// Scrool
// ==========================================================================
$('a.scroll__btn').smoothScroll();

// ==========================================================================
// Search
// ==========================================================================
// Variables
var btnOpen = document.getElementById('search-open');
var searchContainer = document.getElementById('search-wrapper');

// Open Search Container
function openSearch() {
  searchContainer.classList.remove('is-hidden'); 
  searchContainer.classList.add('is-visibly'); 

  btnOpen.setAttribute('aria-expanded', true);
}

// Close Search Container
function closeSearch() {
  searchContainer.classList.remove('is-visibly'); 
  searchContainer.classList.add('is-hidden'); 

  btnOpen.setAttribute('aria-expanded', false);
}

// Simple Jekyll Search
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  searchResultTemplate: '<li class="navbar__search__results__item"><a class="navbar__search__results__item__link" href="{url}" title="{desc}">{title}</a></li>',
  noResultsText: '<p class="navbar__search__results--no-results">Nenhum post foi encontrado! :(</p>'
})

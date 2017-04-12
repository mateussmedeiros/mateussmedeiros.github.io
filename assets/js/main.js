// ==========================================================================
// Scrool
// ==========================================================================
$('a.scroll__btn').smoothScroll();

// ==========================================================================
// Search
// ==========================================================================
// Variables
var btnSearch = document.getElementById('search-open');
var searchContainer = document.getElementById('search-wrapper');

// Open Search Container
function openSearch() {
  searchContainer.classList.remove('is-hidden'); 
  searchContainer.classList.add('is-visibly'); 
  btnSearch.setAttribute('aria-expanded', true);
}

// Close Search Container
function closeSearch() {
  searchContainer.classList.remove('is-visibly'); 
  searchContainer.classList.add('is-hidden'); 
  btnSearch.setAttribute('aria-expanded', false);
}

// Simple Jekyll Search
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  searchResultTemplate: '<li class="navbar__search__results__item"><a class="navbar__search__results__item__link" href="{url}" title="{desc}">{title}</a></li>',
  noResultsText: '<p class="navbar__search__results--no-results">Nenhum post foi encontrado! :(</p>'
});

// ==========================================================================
// Menu
// ==========================================================================
// Variables
var btnMenu = document.getElementById('menu-open');
var menuContainer = document.getElementById('menu-list');
var listMenu = document.getElementById('navbar-menu-list');
var btnDropdown = document.getElementById('open-dropdown');
var menuDropdown = document.getElementById('menu-dropdown');

// Open Menu Container
function openMenu() {
  menuContainer.classList.add('is-visibly'); 
  btnMenu.setAttribute('aria-expanded', true);
  listMenu.classList.add('slide-left');
}

// Close Menu Container
function closeMenu() {
  menuContainer.classList.remove('is-visibly'); 
  btnMenu.setAttribute('aria-expanded', false);
  listMenu.classList.remove('slide-left');
}

// Open/Close Dropdown Menu
function controlDropdown() {
  if(!menuDropdown.classList.contains("is-visibly")) {
    menuDropdown.classList.remove('is-hidden');
    menuDropdown.classList.add('is-visibly', 'slide-bottom');
    btnDropdown.setAttribute('aria-expanded', true);
  } else if(menuDropdown.classList.contains("is-visibly")) {
    menuDropdown.classList.remove('is-visibly', 'slide-bottom');
    menuDropdown.classList.add('is-hidden');
    btnDropdown.setAttribute('aria-expanded', false);
  }
}

// ==========================================================================
// Remove CSS
// ==========================================================================
window.addEventListener('resize', function(){
  if (window.innerWidth > 768) {
    menuContainer.classList.remove('is-visibly');  
    menuDropdown.classList.remove('is-visibly');
    menuDropdown.classList.remove('is-hidden');
  }
});
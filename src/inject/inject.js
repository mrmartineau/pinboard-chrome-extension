document.addEventListener('DOMContentLoaded', function () {
	var searchInput = document.getElementById('search_query_field');
	var star        = document.querySelectorAll('.star span');
	var homeMain    = document.getElementById('main_welcome');
	var homeLangs;

	// Search box
	if (searchInput !== null) {
		searchInput.setAttribute('placeholder', 'Search Pinboard');
	} else {
		document.body.classList.add('no-search');
	}

	// Home page
	if (homeMain !== null) {
		homeLangs = homeMain.parentElement.previousElementSibling;
		homeMain.parentElement.classList.add('home-main');
		homeLangs.classList.add('home-langs');
	}

	// Stars
	if (star !== null) {
		for (var i = star.length - 1; i >= 0; i--) {
			star[i].innerHTML = '';
		}
	}

	// How to
	if (window.location.pathname == '/howto/') {
		document.body.classList.add('howto');
	}

	// Add URL
	if (window.location.pathname == '/add/') {
		document.body.classList.add('topSquash');
	}

	// Add Note
	if (window.location.pathname == '/note/add/') {
		document.body.classList.add('note');
	}

	// Add Note
	if (window.location.pathname.indexOf('settings') > 0) {
		document.body.classList.add('settings');
	}

});


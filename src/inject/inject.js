chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			/**
			 * Search
			 */
			var searchInput = document.getElementById('search_query_field');
			searchInput.setAttribute('placeholder', 'Search Pinboard');

			var star = document.querySelectorAll('.star span');
			for (var i = star.length - 1; i >= 0; i--) {
				star[i].innerHTML = '';
			}
		}
	}, 10);
});

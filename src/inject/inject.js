chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			/**
			 * Search
			 */
			var searchInput = document.getElementById('search_query_field');
			searchInput.setAttribute('placeholder', 'Search Pinboard');
		}
	}, 10);
});
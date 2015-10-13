// Reverse the contents of an array
angular.module('vortechApp').filter('reverse', function() {
	return function(items) {
		return items.slice().reverse();
	};
});

// Convert MySQL datetime to Angular format
angular.module('vortechApp').filter('dateToISO', function() {
	return function(input) {
		return new Date(input).toISOString();
	};
});
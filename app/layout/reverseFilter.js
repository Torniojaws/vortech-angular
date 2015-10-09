angular.module('vortechApp').filter('reverse', function() {
	return function(items) {
		return items.slice().reverse();
	};
});
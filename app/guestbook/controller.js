angular.module('vortechApp').controller('guestbookCtrl', function($scope, $http, moment) {
	$scope.posts = []
	$http.get('api/api.php/guestbook', { params: {test: "testing123"} })
	.then(function(resGuestbook) {
		$scope.posts = resGuestbook.data;
	});

	$scope.this_year = new moment().year();
	$scope.last_year = new moment().subtract(1, 'year').year();
	
	// Get filtered results:
	/*
	$scope.filter = function(e) {
		console.log(e.currentTarget);
		$http.get('api/api.php/guestbook?test=testing123&filter=' + $scope)
		.then(function(resGuestbook2) {
			$scope.filteredPosts = resGuestbook2.data;
		})
	};
	*/
});


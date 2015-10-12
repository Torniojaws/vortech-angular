angular.module('vortechApp').controller('guestbookCtrl', function($scope, $http) {
	$http.get('api/api.php/guestbook?test=testing123')
	.then(function(resGuestbook) {
		$scope.posts = resGuestbook.data;
	});
	
	// Get filtered results:
	$scope.filter = function(e) {
		console.log(e.currentTarget);
		$http.get('api/api.php/guestbook?test=testing123&filter=' + $scope)
		.then(function(resGuestbook2) {
			$scope.filteredPosts = resGuestbook2.data;
		})
	};
});


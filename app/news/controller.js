angular.module('vortechApp').controller('newsCtrl', function($scope, $http) {
	$news = [];
	$http.get('api/api.php/news?test=testing123')
	.then(function(resNews) {
		$scope.news = resNews.data;
	});
});
angular.module('vortechApp').controller('newsCtrl', function($scope, $http) {
	$news = [];
	$http.get('contents/news.json')
	.then(function(resNews) {
		$scope.news = resNews.data;
	});
});
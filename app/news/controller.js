angular.module('vortechApp').controller('newsCtrl', function($scope, $http) {
	console.log("Loading news");
	$http.get('contents/news.json')
	.then(function(resNews) {
		$scope.news = resNews.data;
	});
});
angular.module('vortechApp').controller('newspageCtrl', function($scope, $http) {
	$news = [];
	$http.get('api/api.php/news', { params: {test: "testing123"} })
	.then(function(res2News) {
		$scope.news = res2News.data;
	});
});
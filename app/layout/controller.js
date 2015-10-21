angular.module('vortechApp').controller('layoutCtrl', function($scope, $http) {
	$scope.menulinks = []; // Init to prevent errors thrown
	$http.get('app/layout/menulinks.json')
	.then(function(res) {
		$scope.menulinks = res.data;
	});
	
	$scope.externals = []; // Prevent errors thrown
	$http.get('app/layout/externals.json')
	.then(function(res2) {
		$scope.externals = res2.data;
	});
	
	$scope.date = new Date();
	
	$scope.visitors = 0;
	$http.get('api/api.php/visitors', { params: {test: "testing123"} })
	.then(function(resVisitors) {
		$scope.visitors = resVisitors.data[0];
	});
	
	// Update visitor count
	$scope.count = 1;
	$http.put('api/api.php/visitors', { params: {test: "testing123"} })
	.success(function(status) {
		console.log(status);
	})
	.error(function(data, status, header, config) {
		console.log(data, status, header, config);
	});
	
	// Album statistics for middle bar
	$scope.mostDownloaded = [];
	$http.get('api/api.php/album_statistics', { params: {test: "testing123", filter: "mostDownloaded"} })
	.then(function(resStats) {
		$scope.mostDownloaded = resStats.data[0];
	});
	
	$scope.bestRating = [];
	$http.get('api/api.php/album_statistics', { params: {test: "testing123", filter: "bestRating"} })
	.then(function(resRating) {
		$scope.bestRating = resRating.data[0];
	});
});

// Todo: siirrä http serviceen
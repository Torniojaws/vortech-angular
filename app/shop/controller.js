angular.module('vortechApp').controller('shopCtrl', function($scope, $http) {
	// CD details
	$scope.albums = [];
	$http.get('api/api.php/shop/cd', { params: {test: "testing123"} })
	.then(function(resCD) {
		$scope.albums = resCD.data;
	});
	
	// Digital releases
	$scope.digital = [];
	$http.get('api/api.php/shop/digital', { params: {test: "testing123"} })
	.then(function(resDigital) {
		$scope.digital = resDigital.data;
	});
	
	// Merchandise
	$scope.merch = [];
	$http.get('api/api.php/shop/merch', { params: {test: "testing123"} })
	.then(function(resMerch) {
		$scope.merch = resMerch.data;
	});
});
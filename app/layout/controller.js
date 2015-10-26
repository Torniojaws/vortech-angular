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
		$scope.bestRating = resRating.data;
	});
	
	// Music player in middle bar
	$scope.songs = [];
	$http.get('api/api.php/sidebar', { params: { test: "testing123" } })
	.then(function(resSongs) {
		$scope.songs = resSongs.data;
	});
	
	soundManager.onready(function() {
		alert('Yay, SM2 loaded OK!');	
	});
});

// Todo: siirrä http serviceen

// MUsic
/*
angular.module('myApp', ['angularSoundManager'])

    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.songs = [
            {
                id: 'one',
                title: 'Rain',
                artist: 'Drake',
                url: 'http://www.schillmania.com/projects/soundmanager2/demo/_mp3/rain.mp3'
            },
            {
                id: 'two',
                title: 'Walking',
                artist: 'Nicki Minaj',
                url: 'http://www.schillmania.com/projects/soundmanager2/demo/_mp3/walking.mp3'
            },
            {
                id: 'three',
                title: 'Barrlping with Carl (featureblend.com)',
                artist: 'Akon',
                url: 'http://www.freshly-ground.com/misc/music/carl-3-barlp.mp3'
            },
            {
                id: 'four',
                title: 'Angry cow sound?',
                artist: 'A Cow',
                url: 'http://www.freshly-ground.com/data/audio/binaural/Mak.mp3'
            },
            {
                id: 'five',
                title: 'Things that open, close and roll',
                artist: 'Someone',
                url: 'http://www.freshly-ground.com/data/audio/binaural/Things%20that%20open,%20close%20and%20roll.mp3'
            }
        ];
    }]);
*/
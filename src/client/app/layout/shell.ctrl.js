angular
	.module("app.shell")
	.controller("Shell", function($scope, weatherSvc) {
		$scope.getWeatherImgUrl = weatherSvc.getWeatherImgUrl;
        $scope.countryFlagImgUrl = weatherSvc.countryFlagImgUrl;
        $scope.kelvinToDegree = weatherSvc.kelvinToDegree;
        $scope.getTime = weatherSvc.getTime;
	});
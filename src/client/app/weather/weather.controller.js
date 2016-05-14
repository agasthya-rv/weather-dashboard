angular
.module("app.weather", [])
.controller("Weather", function($scope, $routeParams, weatherSvc) {
	$scope.current = null;
    $scope.getTime = getTime;
	
	if($routeParams != undefined) {
		getCurrent($routeParams.id);
	}
	
	function getCurrent(id) {
		weatherSvc.getCurrent(id)
			.then(
				function(response) {
					console.log(response);
					$scope.current = response;
				},
				function(err) {
					console.log("error loading current weather data: ", err);
				}
		)
	}
    
    function getTime(dt) {
        return new Date(dt*1000);
    }
})
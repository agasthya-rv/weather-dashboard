angular
.module("app.forecast", [])
.controller("Forecast", function($scope, $routeParams, weatherSvc) {
	$scope.forecast = null;
   
	if($routeParams != undefined) {
		getForecast($routeParams.id);
	}
	
	function getForecast(id) {
		weatherSvc.getForecast(id)
			.then(
				function(response) {
					console.log(response);
					$scope.forecast = response;
				},
				function(err) {
					console.log("error loading forecast data: ", err);
				}
		)
	}
})
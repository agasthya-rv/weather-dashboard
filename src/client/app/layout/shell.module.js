angular
.module("app.shell", ["ngRoute"])
.config(function($routeProvider) {
	$routeProvider
		.when("/search", {
			templateUrl: "app/search/search.html",
			controller: "Search"
		})
		.when("/weather/:id", {
			templateUrl: "app/weather/weather.html",
			controller: "Weather"
		})
		.when("/forecast/:id", {
			templateUrl: "app/forecast/forecast.html",
			controller: "Forecast"
		})
		.otherwise({
			redirectTo: "/search"
		})
})
	
angular
.module("app.data")
	.factory("weatherSvc", function($http, $q) {
		return {
			find: findByLocation,
			getCurrent: getCurrentWeather
		}
		
		function findByLocation(location){
			var url = "http://api.openweathermap.org/data/2.5/find?APPID=63af05aeeb11411685d151404c6cc7f7&q=" + location;
			var defer = $q.defer();
			
			$http.get(url)
				.success(function(response) {
					defer.resolve(response);
				})
				.error(function(err) {
				defer.reject(err);
				})
			return defer.promise;
		}
	
		function getCurrentWeather(id){
			var url = "http://api.openweathermap.org/data/2.5/weather?APPID=63af05aeeb11411685d151404c6cc7f7&id=" + id;
			var defer = $q.defer();
			
			$http.get(url)
				.success(function(response) {
					defer.resolve(response);
				})
				.error(function(err) {
				defer.reject(err);
				})
			return defer.promise;
		}
});
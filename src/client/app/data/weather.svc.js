angular
.module("app.data")
	.factory("weatherSvc", function($http, $q, weatherImgUrl, weatherSvcUrl, countryFlagImgUrl) {
		return {
			find: findByLocation,
			getCurrent: getCurrentWeather,
            getForecast: getForecast,
            getWeatherImgUrl: getWeatherImgUrl,
            countryFlagImgUrl: countryFlagImgUrl,
            kelvinToDegree: kelvinToDegree,
            getTime: getTime
		}
		
		function findByLocation(location){
			var url = weatherSvcUrl + "find?APPID=63af05aeeb11411685d151404c6cc7f7&q=" + location;
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
			var url = weatherSvcUrl + "weather?APPID=63af05aeeb11411685d151404c6cc7f7&id=" + id;
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
    
        function getForecast(id){
			var url = weatherSvcUrl + "forecast/daily?APPID=63af05aeeb11411685d151404c6cc7f7&id=" + id;
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
        
        function getWeatherImgUrl(imgStr) {
            return weatherImgUrl + imgStr + ".png";
        }
    
        function getCountryFlagImgUrl(imgStr) {
            return getCountryFlagImgUrl + imgStr.toLowerCase() + ".png";
        }
    
        function kelvinToDegree(temp) {
            return temp - 273.15;
        }
        
        function getTime(dt) {
            return new Date(dt*1000);
        }
});
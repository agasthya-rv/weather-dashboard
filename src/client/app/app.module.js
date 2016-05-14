angular
	.module("app", ["app.shell", "app.search", "app.weather", "app.forecast", "app.component", "app.data"])
	.run(['$route', function($route) {
		$route.reload();
	}])
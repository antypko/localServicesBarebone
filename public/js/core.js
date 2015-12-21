//var localServiceProviderApp = angular.module('localServiceProviderApp', ['spController', 'spService', 'ngRoute']);
angular
    .module('localServiceProviderApp', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        $routeProvider
            .when('/serviceProviders',{
                templateUrl: 'partials/service_providers.html',
                controller: 'mainController'
            })
            .otherwise({
                redirectTo: '/serviceProviders'
            });
        $locationProvider.html5Mode(true);
    }]);
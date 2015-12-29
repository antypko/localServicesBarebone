angular
    .module('localServiceProviderApp', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        $routeProvider
            .when('/serviceProviders',{
                templateUrl: 'partials/service_providers.html',
                controller: 'serviceProvidersController'
            })
            .when('/serviceProvider/:id',{
                templateUrl: 'partials/service_provider.html',
                controller: 'serviceProviderController'
            })
            .otherwise({
                redirectTo: '/serviceProviders'
            });
        $locationProvider.html5Mode(true);
    }]);
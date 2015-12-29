angular
    .module('localServiceProviderApp')
    .controller('serviceProviderController',
        function ($scope, $http, $routeParams, ServiceProviders) {
            console.log('second controller');
            $scope.formData = {};
            $scope.serviceProvider = {};
            ServiceProviders.getById($routeParams.id)
                .success(function(data){
                    $scope.serviceProvider = data;
                })
                .error(function(err){
                    console.log('Error: ' + err);
                });

            // delete a service_provider after checking it
            $scope.deleteServiceProvider = function(id) {
                ServiceProviders.delete(id)
                    .success(function(data) {
                        $scope.serviceProvider = data;
                    })
                    .error(function(err) {
                        console.log('Error: ' + err);
                    });
            };
        }
    );
angular
    .module('localServiceProviderApp')
    .controller('serviceProviderController',
        function ($scope, $routeParams, ServiceProviders) {
            $scope.formData = {};
            $scope.serviceProvider = {};
            ServiceProviders.getById($routeParams.id)
                .success(function(data){
                    console.log(data);
                    $scope.serviceProvider = data;
                })
                .error(function(err){
                    console.log('Error: ' + err);
                });

            // delete a service_provider after checking it

            $scope.editServiceProvider = function() {
                $scope.buttonDisabled = true; // we can disable the button now, but we cannot clear the form yet!
                //var serviceProvider = $scope.serviceProvider;
                var nameAvailable = $scope.serviceProvider.name && $scope.serviceProvider.name.length;
                if (nameAvailable) { // check if something is entered
                    ServiceProviders.edit($scope.serviceProvider)
                        .success(function(data) {
                            $scope.serviceProviders = data;
                            console.log(data);
                        })
                        .error(function(data) {
                            console.log("Error");
                            console.log(data);
                        })
                        .finally(function(data) {
                            $scope.formData.name = ""; // only now we can clear the form
                            $scope.buttonDisabled = false; // now we can enable the button again
                        });
                }
            };

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
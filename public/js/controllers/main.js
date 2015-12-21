angular
    .module('localServiceProviderApp')
    .controller('mainController',
        function ($scope, $http, ServiceProviders) {
            $scope.formData = {};

            // when landing on the page, get all service_providers and show them
            ServiceProviders.get()
                .success(function(data) {
                    $scope.serviceProviders = data;
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });

            // when submitting the add form, send the text to the node API
            $scope.createServiceProvider = function() {
                // validate the formData to make sure that something is there
                // if form is empty, nothing will happen
                // people can't just hold enter to keep adding the same to-do anymore
                $scope.buttonDisabled = true; // we can disable the button now, but we cannot clear the form yet!
                if ($scope.formData.text.length) { // check if something is entered
                    ServiceProviders.create($scope.formData)
                        .success(function(data) {
                            $scope.serviceProviders = data;
                            console.log(data);
                        })
                        .error(function(data) {
                            console.log("Error");
                            console.log(data);
                        })
                        .finally(function(data) {
                            $scope.formData.text = ""; // only now we can clear the form
                            $scope.buttonDisabled = false; // now we can enable the button again
                        });
                }
            };

            // delete a service_provider after checking it
            $scope.deleteServiceProvider = function(id) {
                ServiceProviders.delete(id)
                    .success(function(data) {
                        $scope.serviceProviders = data;
                        console.log(data);
                    })
                    .error(function(data) {
                        console.log('Error: ' + data);
                    });
            };
    });
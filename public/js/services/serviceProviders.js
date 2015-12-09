angular.module('spService', [])

    // super simple service
    // each function returns a promise object 
    .factory('ServiceProviders', function($http) {
        return {
            get : function() {
                return $http.get('/api/service_providers');
            },
            create : function(todoData) {
                return $http.post('/api/service_providers', todoData);
            },
            delete : function(id) {
                return $http.delete('/api/service_providers/' + id);
            }
        }
    });
'use strict';

angular.module('devbridgeApp')
    .controller('NavbarController', function ($scope, $location, $state, Auth, Principal, $rootScope, $http) {
        $scope.isAuthenticated = Principal.isAuthenticated;
        $scope.$state = $state;

        $scope.logout = function () {
            Auth.logout();
            $state.go('home');
        };

        $rootScope.$on('devbridgeApp:paniershopUpdate', function(event, response) {
            $scope.nbreshop = response;
        });

        $scope.nbreshops = function () {
            $http.get('http://127.0.0.1:8080/api/nbreshop').success(function(response){
                $scope.nbreshop = response;
            }).error(function(reason){
                console.log(reason);
            });
        };

    });

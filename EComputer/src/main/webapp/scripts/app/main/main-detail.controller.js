'use strict';

angular.module('devbridgeApp')
    .controller('MainDetailController', function ($scope, $rootScope, $stateParams, Ordinateur,Principal,$http) {

        $scope.isAuthenticated = Principal.isAuthenticated;

        $scope.ordinateur = {};

        $scope.load = function() {

            Ordinateur.get({id: $stateParams.id}, function(result) {
                $scope.ordinateur = result;
            });
        };
        $scope.load();
        $scope.paniershop = 0;
        $scope.saveshop = function () {
            $http.post('http://127.0.0.1:8080/api/paniershop/'+$scope.ordinateur.id+'/'+$scope.ordinateur.prix).success(function(response){
                console.log($scope.paniershop);
                $scope.$emit('devbridgeApp:paniershopUpdate', response);
            }).error(function(reason){
                console.log(reason);
            });
        };
    });



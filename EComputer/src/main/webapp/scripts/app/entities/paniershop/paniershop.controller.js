'use strict';

angular.module('devbridgeApp')
    .controller('paniershopController', function ($scope,$http) {

        $scope.paniershops = [];

        $scope.loadAll = function () {
            $http.get('http://127.0.0.1:8080/api/panieruser').success(function(response){
                $scope.paniershops = response;
                $scope.$emit('devbridgeApp:panieruser', response);
            }).error(function(reason){
                console.log(reason);
            });
        };
        $scope.loadAll();


        $scope.total = function(){
            $scope.prixtotal = 0;
            for(var i=0;i< $scope.paniershops.length;i++){
               $scope.prixtotal= $scope.prixtotal + $scope.paniershops[i].prix;
                }
            return $scope.prixtotal;
        };

        $scope.delete = function (item) {
            $http.post('http://127.0.0.1:8080/api/delete/'+item).success(function(response){
                $scope.paniershops = response;
                $scope.loadAll();
            }).error(function(reason){
                console.log(reason);
            });
        };

        $scope.vider = function () {
            for(var i=0;i< $scope.paniershops.length;i++){
                $http.post('http://127.0.0.1:8080/api/delete/' +$scope.paniershops[i].id).success(function(response){
                    $scope.paniershops = response;
                }).error(function(reason){
                    console.log(reason);
                });
            }
            $scope.loadAll();
        };

    });

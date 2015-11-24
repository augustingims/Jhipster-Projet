'use strict';

angular.module('devbridgeApp')
    .controller('MainController', function ($scope, Principal, $http) {
        Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
        });

        $scope.getImg = function(id){
            console.log('id: '+id);
        }

        $scope.ordinateurs = [];
        $scope.loadAll = function () {
                $http.get('http://127.0.0.1:8080/api/ordinateurs').success(function(response){
                    $scope.ordinateurs = response;
                    console.log($scope.ordinateurs);
                }).error(function(reason){
                    console.log(reason);
                });

        };
        $scope.loadAll();

        angular.element(document).ready(function() {
            angular.element('i.glyphicon-thumbs-up, i.glyphicon-thumbs-down').click(function(){
                var $this = angular.element(this),
                    c = $this.data('count');
                if (!c) c = 0;
                c++;
                $this.data('count',c);
                angular.element('#'+this.id+'-bs3').html(c);
            });
            angular.element(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
                event.preventDefault();
                angular.element(this).ekkoLightbox();
            });
        });
    });
'use strict';

angular.module('devbridgeApp')
    .controller('paymentController', function ($scope,$http, Payment, entity, $stateParams) {

        $scope.payment = entity;

        $scope.load = function(id) {
            Payment.get({id : id}, function(result) {
                console.log(result);
                $scope.payment = result;
            });
        };
        $scope.load();

        var onSaveFinished = function (result) {
            $scope.$emit('devbridgeApp:payment', result);
        };
        $scope.pay = function () {

            if ($scope.payment.id != null) {
                Payment.update($scope.payment, onSaveFinished);
            } else {
                Payment.save($scope.payment, onSaveFinished);
            }
            $scope.payment = {};
        };

    });

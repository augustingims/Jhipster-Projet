'use strict';

angular.module('devbridgeApp')
    .factory('paniershop', function ($resource, DateUtils) {
        return $resource('api/paniershop/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });

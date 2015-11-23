'use strict';

/**
 * @ngdoc function
 * @name vaad3dWebsiteApp.service:JobService
 * @description
 */
vaad3dApp.service('JobService', ['$http', '$filter', 'vaa3dConfig', 
    function ($http, $filter, vaa3dConfig) {
        return {
            getJobItems: function(job_id) {
                var url = vaa3dConfig.url + "/job_items/" + job_id;
                var promise = $http.get(url).then(function (response) {
    	           return response.data;
                });
                return promise;
            },
            getJob: function(job_id) {
                var url = vaa3dConfig.url + "/job/" + job_id;
                var promise = $http.get(url).then(function (response) {
                   return response.data;
                });
                return promise;
            }
        }
    }
]);

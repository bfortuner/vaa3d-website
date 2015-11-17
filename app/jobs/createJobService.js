'use strict';

/**
 * @ngdoc function
 * @name vaad3dWebsiteApp.service:createJobService
 * @description
 */
vaad3dApp.service('createJobService', ['$http', '$filter', 'vaa3dConfig', 
  function ($http, $filter, vaa3dConfig) {
    return {
	    getAvailableFiles: function() {
        var url = vaa3dConfig.url + "/input_filenames";
        var promise = $http.get(url).then(function (response) {
	        return response.data;
        });
        return promise;
	    },
        createNewJob: function(newJob) {
        var job = $filter('json')(newJob);
        var promise = $http({
            method:"POST",
            url: vaa3dConfig.url + "/create_job",
            data: job,
            headers: {'Content-Type': 'application/json'}
        }).then(function (response) {
            return response.data;
        });
        return promise; 
	    }
    }
  }
]);

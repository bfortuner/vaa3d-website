'use strict';

/**
 * @ngdoc function
 * @name vaad3dWebsiteApp.controller:CreateJobCtrl
 * @description
 */
vaad3dApp.controller('JobCtrl', 
	['$scope', '$location', '$routeParams', 'vaa3dConfig', 'JobService', 'MessagesService', 'jobConstants',
  	function ($scope, $location, $routeParams, vaa3dConfig, JobService, MessagesService, jobConstants) {
		
		$scope.jobId = $routeParams.job_id;	  
		$scope.s3LoginUrl = vaa3dConfig.s3LoginUrl;

		JobService.getJobItems($scope.jobId).then(function(d) {
			$scope.jobItems = d.job_items; 
			console.log($scope.jobItems);
		});

		$scope.searchText;
		$scope.sortKey = 'input_filename';
		$scope.sortOrder = false;
		$scope.setOrderBy = function(key, order) {
			$scope.sortKey = key;
			$scope.sortOrder = !order;
		};

   }
]);

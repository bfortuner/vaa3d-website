'use strict';

/**
 * @ngdoc function
 * @name vaad3dWebsiteApp.controller:CreateJobCtrl
 * @description
 */
vaad3dApp.controller('CreateJobCtrl', ['$scope', '$location', 'vaa3dConfig', 'createJobService', 
  	function ($scope, $location, vaa3dConfig, createJobService) {
	  $scope.s3LoginUrl = vaa3dConfig.s3LoginUrl;
	  $scope.filenames;
	  $scope.emailAddress;

	  createJobService.getAvailableFiles().then(function(d) {
        $scope.availableFilenames = d.filenames;
        buildFilenamesObj();
      });

	  var buildFilenamesObj = function() {
	  	$scope.filenames = {}
        for (var i=0; i < $scope.availableFilenames.length; i++) {
          $scope.filenames[$scope.availableFilenames[i]] = false;
        }
	  };
      
	  var getSelectedFilenames = function() {
	  	var filenames = [];
		for (var file in $scope.filenames) {
		  if ($scope.filenames.hasOwnProperty(file) && $scope.filenames[file]) {
		    filenames.push(file)
		  }
		}
	  	return filenames;	
	  };

	  $scope.submitForm = function(isValid) {
	    var newJob = {};
	    newJob.emailAddress = $scope.emailAddress;
	    newJob.filenames = getSelectedFilenames();
		createJobService.createNewJob(newJob).then(function(d) {
		  $location.path('/');
		});
	  }; 

   }
]);

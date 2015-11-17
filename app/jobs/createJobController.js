'use strict';

/**
 * @ngdoc function
 * @name vaad3dWebsiteApp.controller:CreateJobCtrl
 * @description
 */
vaad3dApp.controller('CreateJobCtrl', ['$scope', '$location', 'vaa3dConfig', 'createJobService', 'MessagesService',
  	function ($scope, $location, vaa3dConfig, createJobService, MessagesService) {
	  $scope.s3LoginUrl = vaa3dConfig.s3LoginUrl;
	  $scope.filenames;
	  $scope.emailAddress;
  	  $scope.outputDir;
  	  $scope.outputDirRegex = /^[a-zA-Z0-9]{1,128}$/;
  	  $scope.outputDirRegexHelpMsg = "Name must be alpha-numeric and less than 128 chars";
  	  var jobCompleteMessage = "Success! You will receive an email when the job completes!";

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

	  $scope.submitForm = function() {
	    var selectedFiles = getSelectedFilenames();
	    if (selectedFiles.length < 1) {
		  alert("Please select at least 1 file and resubmit");
		  return false;
	    }
		var newJob = {};
	    newJob.emailAddress = $scope.emailAddress;
	    newJob.filenames = selectedFiles
	    newJob.outputDir = $scope.outputDir;
		createJobService.createNewJob(newJob).then(function(d) {
	  	  MessagesService.openAlert({
        	type: 'success',
        	text: jobCompleteMessage
      	  });
		  $location.path('/');
		});
	  }; 

   }
]);

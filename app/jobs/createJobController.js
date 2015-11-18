'use strict';

/**
 * @ngdoc function
 * @name vaad3dWebsiteApp.controller:CreateJobCtrl
 * @description
 */
vaad3dApp.controller('CreateJobCtrl', 
	['$scope', '$location', 'vaa3dConfig', 'createJobService', 'MessagesService', 'jobConstants',
  	function ($scope, $location, vaa3dConfig, createJobService, MessagesService, jobConstants) {
	  
		$scope.s3LoginUrl = vaa3dConfig.s3LoginUrl;
		$scope.outputDirRegex = /^[a-zA-Z0-9]{1,128}$/;
		$scope.outputDirRegexHelpMsg = "Name must be alpha-numeric and less than 128 chars";
		var jobCompleteMessage = "Success! You will receive an email when the job completes!";
		$scope.jobTypes = jobConstants.JOB_TYPES;
		$scope.jobTypePlugins = jobConstants.JOB_TYPE_PLUGINS;
		$scope.plugins = jobConstants.PLUGINS;

		var initForm = function() {
			$scope.newJob = {};
			$scope.newJob.emailAddress = '';
			$scope.newJob.outputDir = '';
			$scope.newJob.jobType = $scope.jobTypes[0];
			$scope.newJob.pluginName = $scope.jobTypePlugins[$scope.jobTypes[0]][0];
			$scope.newJob.pluginSettings = {
				'channel' : 1,
				'method' : 'APP1'
			},
			$scope.newJob.filenames = [];
		};
		initForm();

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
			$scope.newJob.filenames = selectedFiles
			console.log($scope.newJob);
			createJobService.createNewJob($scope.newJob).then(function(d) {
		  		MessagesService.openAlert({
					type: 'success',
					text: jobCompleteMessage
				});
				$location.path('/');
			});
		}; 

   }
]);

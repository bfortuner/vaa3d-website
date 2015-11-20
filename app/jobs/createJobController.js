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

		var initForm = function() {
			$scope.newJob = {};
			$scope.newJob.emailAddress = '';
			$scope.newJob.outputDir = '';
			$scope.newJob.jobType = $scope.jobTypes[0];
			$scope.newJob.plugin = {};
			$scope.newJob.plugin.name = $scope.jobTypePlugins[$scope.jobTypes[0]][0];
			$scope.newJob.plugin.method = $scope.plugins[$scope.newJob.plugin.name].method.default;
			$scope.newJob.plugin.settings = {};
			$scope.newJob.plugin.settings.params = {};
			$scope.newJob.plugin.settings.params.channel =
				$scope.plugins[$scope.newJob.plugin.name].settings.params.channel.default;
			$scope.newJob.filenames = [];
		};

		createJobService.getAvailableFiles().then(function(d) {
			$scope.availableFilenames = d.filenames;
			buildFilenamesObj();
		});

		createJobService.getJobTypePlugins().then(function(d) {
			$scope.jobTypes = d.job_types;
			$scope.jobTypePlugins = d.job_type_plugins;
			$scope.plugins = d.plugins;
			initForm();
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

		$scope.refreshPluginSettingsMenu = function() {
			$scope.newJob.plugin.settings.params.channel = 
				$scope.plugins[$scope.newJob.plugin.name].settings.params.channel.default;
			$scope.newJob.plugin.method = 
				$scope.plugins[$scope.newJob.plugin.name].method.default;
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

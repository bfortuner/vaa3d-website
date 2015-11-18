'use strict';

vaad3dApp.directive('pluginSettingsPopover', function () {
return {
    restrict: 'EA',
    controller: 'CreateJobCtrl',
    templateUrl: 'jobs/plugin_settings_popover.html',
    link: function(scope, elem, attrs) {
      $(elem).popover({  
        trigger:'click',
        html : true,
        placement: 'top'
      });
    },
  }
});
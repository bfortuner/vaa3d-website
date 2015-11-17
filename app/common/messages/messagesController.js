'use strict';

/**
 * @ngdoc function
 * @name vaad3dWebsiteApp.controller:MessagesController
 * @description
 */
vaad3dApp.controller('MessagesCtrl', ['$scope', 'vaa3dConfig', 'MessagesService', 
  	function ($scope, vaa3dConfig, MessagesService) {

      $scope.closeAlert = function () {
        MessagesService.closeAlert();
      };
   }
]);

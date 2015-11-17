'use strict';

/**
 * @ngdoc function
 * @name vaad3dWebsiteApp.service:MessagesService
 * @description
 */
vaad3dApp.service('MessagesService', ['$rootScope', 'vaa3dConfig',
  function ($rootScope, vaa3dConfig) {
    return {
        openAlert: function (alert) {
            $rootScope.alertText = alert.text;
            $rootScope.alertType = alert.type;
        },

        closeAlert : function () {
            $rootScope.alertText = null;
            $rootScope.alertType = null;
        }
    }
}
]);

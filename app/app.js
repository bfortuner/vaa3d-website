'use strict';

/**
 * @ngdoc overview
 * @name vaad3dWebsiteApp
 * @description
 * # vaad3dWebsiteApp
 *
 * Main module of the application.
 */

var vaad3dApp = angular.module('vaad3dWebsiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/about', {
        templateUrl: 'about/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/create_job', {
        templateUrl: 'jobs/create_job.html',
        controller: 'CreateJobCtrl',
        controllerAs: 'createJob'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

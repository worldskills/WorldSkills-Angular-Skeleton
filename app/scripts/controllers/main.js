'use strict';

/**
 * @ngdoc function
 * @name worldSkillsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the worldSkillsApp
 */
angular.module('worldSkillsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

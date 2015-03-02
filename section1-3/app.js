'use strict';

var MyController = function ($scope) {
  $scope.message = 'Hello, world!';
  $scope.action = function () {
    $scope.message = 'Goodby, Everyone!';
  };
};
var appModule = angular.module('app', []);
appModule.controller('myController', MyController);
